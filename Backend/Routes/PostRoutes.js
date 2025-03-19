const express = require("express");
const router = express.Router();

const {checkRole} = require("../middlewares/PostMiddleware");
const { allUser } = require("../Controllers/PostController")
const {verifyToken} = require("../middlewares/authMiddleware")

router.get("/users" ,verifyToken,  checkRole(["Admin"]) , allUser);

module.exports = router;