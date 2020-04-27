const {
  createUser,
  getAllUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  userLogin
} = require("./user-controller");
const { checkToken } = require("../../auth/token_validation") 
const router = require("express").Router();

router.post("/", checkToken, createUser);
router.get("/", checkToken, getAllUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.post("/login", userLogin);

module.exports = router;
