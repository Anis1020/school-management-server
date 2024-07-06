const express = require("express");
const {
  getAllUsers,
  createUser,
  deleteAUser,
  getAUsers,
  updateAUsers,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getAUsers);
router.post("/", createUser);
router.patch("/:id", updateAUsers);
router.delete("/:id", deleteAUser);

module.exports = router;
