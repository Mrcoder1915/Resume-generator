const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken
    if(!token) return res.status(401).json({message: "token expired"})

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,result) => {
        console.log(token)
        console.log("verify token role: ",result)
        if(err) return res.status(401).json({message: "invalid token"})
        
        req.user = result
        next()
    })
}

module.exports = {
    verifyToken
}