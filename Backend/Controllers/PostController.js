const connection = require("../config/connection");


const allUser = async (req,res) => {
    try {
        const query = `SELECT * FROM userdb`
        const allUser = await connection(query)

        if(!allUser) return res.status(400).json({message: "users not found"})
        
        res.status(201).json({Allusers: allUser})
    } catch (error) {
        console.log("fetch All users: ", error)
    }
}
module.exports = {
    allUser
}