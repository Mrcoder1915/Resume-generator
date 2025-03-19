require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"});
 };
 const generateRefreshToken = (user) => {
     return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
 };

 module.exports = {
    generateAccessToken,
    generateRefreshToken
 }