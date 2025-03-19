const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../config/connection");
const {generateAccessToken, generateRefreshToken} = require("../utils/jsonWebToken")

const register = async (req, res)  => {
    const {email , password, userName, role} = req.body;

    try{
        const query1 = `SELECT Email FROM userdb WHERE Email = ?`;
        const result = await connection(query1, [email])

        if(result.length > 0) return res.status(400).json({message: "Invalid Email"})

        const hashedPassword = await bcrypt.hash(password, 10);

        const query2 = `INSERT INTO userdb (Email, Password, user_name, Role) VALUES (?,?,?,?)`;

        await connection(query2, [email, hashedPassword, userName, role]);
    
        return  res.status(201).json({message: "User Register Succcesfully!"});
    }catch(err){
        console.log("Error: ", err);
    } 
};

const login = async (req, res) => {
    const {email, password} =  req.body;
    try{
        const query = `SELECT * FROM userdb WHERE Email = ?`;
        const result = await connection(query, [email]);

        if(result.length === 0) return res.status(400).json({message: "User not Found"});

        const user = result[0];
        const checkPassword = await bcrypt.compare(password, user.Password);

        if(!checkPassword) return res.status(401).json({message : "Invalid Credentials"});

        const accessToken = generateAccessToken({id: user.user_Id, userName: user.user_name, Role: user.Role});
        const refreshToken = generateRefreshToken({id: user.user_Id, userName: user.user_name, Role: user.Role})

        res.cookie("accessToken", accessToken, {httpOnly: true, secure: true, sameSite: "strict"});
        res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, sameSite: "strict"});
        res.status(200).json({message: "Login succesfully", Role: user.Role});
    }catch(err){
        console.log("Error: ", err);
        res.status(500).json({message: "Server error"});
    } 
};

const refreshingToken = (req, res) => {
    console.log("refresh token api hit")
    const refreshToken = req.cookies?.refreshToken;
    console.log("cookies", refreshToken)

    
    if(!refreshToken) return res.status(401).json({message: "expired token"})
    
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,result) => {
        if(err) return res.status(401).json({message: "Invalid token"})
        const newToken = generateAccessToken({id: result.user_Id, userName: result.user_name, Role: result.Role})
        res.cookie("accessToken", newToken,{secure: true, sameSite: "strict"});
        res.status(201).json({message: "Access Token Created"})
    })
}
const protectedroutes = (req,res) => {
    res.json({message: "authenticated"})
}
const logout = (req,res) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({message: "LOgout"})
}
module.exports = {
    register,
    login,
    refreshingToken,
    logout,
    protectedroutes,
}