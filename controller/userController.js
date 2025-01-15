const User = require("../model/user.model.js");
const { uploadCloudinary } = require("../utils/cloudinary.js");

// Create and Save a new User
exports.Create = async (req, res) => {
  try {
    const file = req.file;
    const { name, userName } = req.body;

    if (!name || !userName) {
      res.status(400).json({
        message: "Name and userName can not be empty",
      });
    }
    if (!file) {
      res.status(400).json({
        message: "Please upload a menuCategory file",
      });
    }
    const userimage = await uploadCloudinary(file.path);
    const newUser = new User({
      name,
      userName,
      image: userimage.url,
    });
    await newUser.save();
    res.status(200).json({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

// get all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving users.",
    });
  }
};
