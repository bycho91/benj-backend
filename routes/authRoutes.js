const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

// router.get("/", getUser);

// router.post("/", createUser);

// router.put("/:id", updateUser);

// router.delete("/:id", deleteUser);

module.exports = router;
