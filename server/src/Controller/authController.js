const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Model/auth')
const salt = 10

/*============SIGNUP============ */
const signup = async (req, res) => {
    try{
        const {name, email, role, password, confirmpassword} = req.body
        if(password !== confirmpassword){
            return res.status(400).json({messgae:"Password does not match with COnfirm Password"})
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "Email already registered"})
        }
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await User.create({name: name, email: email, role: role, password: hashedPassword})
        res.status(201).json({success:true, message: 'User Created Succesfully'}, user)
    }catch(err){
        res.status(500).json({success:false, message: "Something went wrong"}, err)
        console.log("error", err)
    }
}
/*===========LOGIN=============== */
const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const username = await User.findOne(email) //Find the user in the database
        if(!username){
            res.status(400).json({message: "User not Found"})
        }
        const isMatch = await bcrypt.compare(password, loginUser.password) //Comparing Password using bcrypt
        if(!isMatch) res.status(400).json({message: "Invaild User Credentials"})
        const token = jwt.sign({id:username._id, role:username.role}, process.env.JWT_SECRET, {expiresIn: "1d"})
        res.status(200).json({sucess:true, message: "User Loginned"})
    }catch(err){
        res.send(400).json({message:"Something went wrong"}, err)
    }
}
module.exports = {signup, login}
