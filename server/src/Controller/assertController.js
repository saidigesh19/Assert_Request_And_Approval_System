const Assert = require('../Model/assert')

const empAssert = async (req, res)=>{
    try{
        const {assert_name, reason} = req.body
        const assertrequest =await Assert.create({assert_name: assert_name, reason:reason, employee: req.user._id})
        res.status(201).json({status:true, message:"Assert request is submitted", assertrequest})
    }catch(err){
        res.status(500).json({status:false, message:err.message}, err)
    }
}

const myRequest=async(req,res)=>{
    try{
        const requests=await Assert.find({
            employee:req.user._id,
        }).sort({createdAt:-1});
        res.status(200).json({
            success:true,
            data:requests,
        });
    }catch(err){
         res.status(500).json({status:false, message:err.message}, err)
    }
}

module.exports = {empAssert, myRequest}