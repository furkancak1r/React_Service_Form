const {
  formDataImport,
  listItemDataImport,
  createNewUser,
  findUniqueUser,
  doesUserExist,
} = require("../prisma/prismaConnections/tables.js");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const handleFormDataUpload = async (req, res) => {
  const data = req.body;
  const response = await formDataImport(data);
  if (response) {
    res.status(200).json({ status: "success", data: response });
  } else {
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

const handleListItemDataUpload = async (req, res) => {
  const data = req.body;
  const response = await listItemDataImport(data);
  if (response) {
    res.status(200).json({ status: "success", data: response });
  } else {
    res.status(400).json({ status: "error", error: "Something went wrong" });
  }
};

const handleVisualDataUpload = async (req, res) => {
  const dataArray = req.body;

  if (dataArray && dataArray.length > 0) {
    try {
      for (const data of dataArray) {
        if (data && data.dataURL && data.reportNo) {
          const folderName = `${data.reportNo} - ${data.serviceNo}`;
          const folderPath = path.join("./images/", folderName);

          // Create the folder if it doesn't exist
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
          }

          // Specify the file path within the folder
          let fileName = data.name;

          // Add ".png" extension if the name doesn't have an image or video extension
          if (
            !/\.(png|jpg|jpeg|gif|bmp|svg|mp4|avi|mov|mkv)$/i.test(fileName)
          ) {
            fileName += data.dataURL.includes("video") ? ".mp4" : ".png";
          }

          const filePath = path.join(folderPath, fileName);
          const base64Data = data.dataURL.split(",")[1];
          const buffer = Buffer.from(base64Data, "base64");

          // Write the buffer to the file
          await writeFileAsync(filePath, buffer);
        } else {
          res.status(400).json({
            status: "error",
            error: "Missing or undefined dataURL or reportNo",
          });
          console.error("Missing or undefined dataURL or reportNo");
          return; // Stop processing if there's an error
        }
      }

      res
        .status(200)
        .json({ status: "success", message: "Files uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", error: "Failed to write file" });
    }
  } else {
    res
      .status(400)
      .json({ status: "error", error: "Empty or undefined dataArray" });
  }
};

// Helper function to promisify fs.writeFile
const writeFileAsync = (filePath, buffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const handleCreateNewUser = async (req, res) => {
  const { password: plaintextPassword, username } = req.body;

  // Check if the user already exists using the new function
  const userExists = await doesUserExist(username);
  if (userExists) {
    return res.status(401).json({ message: "Username already exists" });
  }

  // Hash the password and create the user
  bcrypt.hash(plaintextPassword, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    // Use the createNewUser function
    const success = await createNewUser({ username, hash });

    // Handle the response from createNewUser
    if (success) {
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(500).json({ message: "Error creating user" });
    }
  });
};

const handleAdminLogin = async (req, res) => {
  const plaintextPassword = req.body.password;
  const username = req.body.username;
  // Use findUniqueUser to retrieve the user
  const user = await findUniqueUser(username);
  if (user) {
    const passwordHashed = user.passwordHashed;
    if (!passwordHashed) {
      return res.status(500).json({ message: "Password hash not found" });
    }
    bcrypt.compare(plaintextPassword, passwordHashed, (err, result) => {
      if (err) {
        // Handle the error, e.g., log it or return an error response
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (result) {
        // Passwords match, set the user session and send a success response
        req.session.user = username;
        res.status(200).json({ message: "Login Success" });
      } else {
        // Passwords do not match
        res.status(401).json({ message: "Username or password is incorrect" });
      }
    });
  } else {
    res.status(401).json({ message: "Username or password is incorrect" });
  }
};

module.exports = {
  handleFormDataUpload,
  handleVisualDataUpload,
  handleListItemDataUpload,
  handleAdminLogin,
  handleCreateNewUser,
};
