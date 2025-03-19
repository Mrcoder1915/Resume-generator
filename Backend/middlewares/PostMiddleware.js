const checkRole = (roles = []) => {
    return (req,res,next) => {
        if(!req.user){
            return res.status(400).json({message: "USers not Found"})
        }
        if(!req.user.Role || !roles.includes(req.user.Role)){
            return res.status(400).json({message: "Your are not authorize to have an access"})
        }
        console.log(req.user.Role)
        next()
    }
}
module.exports = {
    checkRole
}