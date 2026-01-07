const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Model/auth')
const salt = 10

/*============SIGNUP============ */
const signup = async (req, res) => {
    try{
        console.log(req.body)
        const {name, email, role, password, confirmpassword} = req.body //Destructuring the request body
        if(password !== confirmpassword){  //compare the password with confirm password
            return res.status(400).json({messgae:"Password does not match with Confirm Password"})
        }
        const existingUser = await User.findOne({email}) //check the user email in db
        if(existingUser){
            return res.status(400).json({message: "Email already registered"})
        }
        const hashedPassword = await bcrypt.hash(password, salt) //hashing the password
        const user = await User.create({name:name, email: email, role: role, password: hashedPassword}) // create and save the data in the database
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
        const user = await User.findOne({email}) //Find the user in the database
        if(!user){
            res.status(400).json({message: "User not Found"})
        }
        const isMatch = await bcrypt.compare(password, user.password) //Comparing Password using bcrypt
        if(!isMatch) res.status(400).json({message: "Invaild User Credentials"})
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn: "1d"}) // creating the jwt token
        res.status(200).json({sucess:true,token,user:{id:user._id,name:user.name,email:user.email,role:user.role}, message: "User Loginned"})
    }catch(err){
        res.send(400).json({message:"Something went wrong"}, err)
    }   
}
module.exports = {signup, login}
