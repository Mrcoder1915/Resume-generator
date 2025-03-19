const express = require("express");
const router = express.Router();
const {register, login, refreshingToken, logout, protectedroutes} = require("../Controllers/AuthController");
const {verifyToken} = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshingToken);
router.post("/logout", logout);
router.post("/protected",verifyToken ,protectedroutes);
module.exports = router;
// router.post("/login", login);