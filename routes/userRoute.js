const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const userController = require("../controller/userController.js");

// Create a new User
router.post("/", upload.single("userimage"), userController.Create);
router.get("/", userController.findAll);

module.exports = router;
