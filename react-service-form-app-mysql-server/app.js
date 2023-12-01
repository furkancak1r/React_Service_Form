const express = require("express");
const cors = require("cors");
const app = express();
const {uploadFormData} = require("./connections/elements.js");
// const formDataImport = require("./prisma/connections/formData.js");

app.use(cors());


app.use(express.json()); // Add this line to parse JSON data

app.post("/api/form-data-upload", async (req, res) => {
  const data = req.body;
 const response= await uploadFormData(data);
 if (response) {
  res.status(200).json({ status: "success", data: response });
} else {
  res.status(400).json({ status: "error", error: "Something went wrong" });
}

});

app.use(cors());

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
