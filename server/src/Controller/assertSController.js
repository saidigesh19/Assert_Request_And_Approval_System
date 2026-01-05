const Assert = require('../Model/assert')
const userSchema = require('../Model/auth')


const empAssert = async (req, res)=>{
    try{
        const {assert_name, user_id, assert_id, reason} = req.body
        const assertrequest =await Assert.create({assert_name: assert_name, user_id: user_id, assert_id: assert_id, reason:reason, })
        res.status(200).json({status:true, message:"Assert request is submitted"}, assertrequest)
    }catch(err){
        res.status(401).json({status:false, message:"Something went worng"}, err)
    }
}

const admin_Assert = async (req, res)=>{
    try{
        const {assert_name, user_id, assert_id, reason} = req.body
        const admindashboard = await Assert.save({assert_name: assert_name, user_id:user_id, assert_id: assert_id, reason:reason,  })

    }catch(err){
        res.status(401).json({status:false, message:"Something went wrong"}, err)
    }
}