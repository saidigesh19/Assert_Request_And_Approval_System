const Assert = require('../Model/assert')

const empAssert = async (req, res)=>{
    try{
        const {assert_name, user_id, assert_id, reason} = req.body
        const assertrequest =await Assert.create({assert_name: assert_name, user_id: user_id, assert_id: assert_id, reason:reason, })
        res.status(200).json({status:true, message:"Assert request is submitted"}, assertrequest)
    }catch(err){
        res.status(401).json({status:false, message:err.message}, err)
    }
}

const myRequest=async(req,res)=>{
    try{
        const requests=await Assert.find({
            employee:req.user._id,
        }).sort({createdAt:-1});
        res.json({
            success:true,
            data:requests,
        });
    }catch(err){
         res.status(401).json({status:false, message:"Something went worng"}, err)
    }
}

module.exports = {empAssert, myRequest}