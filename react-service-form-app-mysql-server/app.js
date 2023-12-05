const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const {
  handleFormDataUpload,
  handleVisualDataUpload,
  handleListItemDataUpload
} = require("./connections/functions.js");

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

app.post("/api/form-data-upload", handleFormDataUpload);
app.post("/api/visual-data-upload", handleVisualDataUpload);
app.post("/api/list-item-data-upload", handleListItemDataUpload);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
