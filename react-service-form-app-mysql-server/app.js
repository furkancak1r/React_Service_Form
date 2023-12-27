const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const {
  handleFormDataUpload,
  handleVisualDataUpload,
  handleListItemDataUpload,
  handleAdminLogin,
  handleCreateNewUser,
} = require("./connections/functions.js");

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

// Configure express-session
app.use(session({
  secret: process.env.SECRET_KEY, // Replace with a real secret key
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 3600000, // 1 saat
  },
}));

app.post("/api/form-data-upload", handleFormDataUpload);
app.post("/api/visual-data-upload", handleVisualDataUpload);
app.post("/api/list-item-data-upload", handleListItemDataUpload);
app.post("/api/admin-login", handleAdminLogin);
app.post("/api/admin-create-user", handleCreateNewUser);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
