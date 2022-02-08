const CryptoJS = require("crypto-js");

const getUsers = (req, res) => {
  res.status(200).json({ message: "get users" });
};

const createUser = (req, res) => {};

const updateUser = (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} has been updated` });
};

const deleteUser = (req, res) => {
  res.status(200).json({ message: `User ${req.params.id} has been deleted` });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
