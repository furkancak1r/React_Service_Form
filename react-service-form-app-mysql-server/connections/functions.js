const {
  formDataImport,
  listItemDataImport,
} = require("../prisma/prismaConnections/tables.js");
const fs = require("fs");
const path = require("path");

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
          console.log(data);
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

module.exports = {
  handleFormDataUpload,
  handleVisualDataUpload,
  handleListItemDataUpload,
};
