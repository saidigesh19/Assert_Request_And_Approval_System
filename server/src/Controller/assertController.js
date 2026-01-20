const AssertRequest = require('../Model/assert')

const empAssert = async (req, res)=>{
    try{
        const {assert_name, reason} = req.body
        const assertrequest =await AssertRequest.create({
            assert_name: assert_name, 
            reason:reason, 
            employee: req.user._id,
            status: "Pending"});
        return res.status(201).json({status:true, message:"Assert request is submitted", assertrequest})
    }catch(err){
        return res.status(500).json({status:false, message:err.message}, err)
    }
}

const myRequest=async(req,res)=>{
    try{
        const requests=await AssertRequest.find({
            employee:req.user._id,
        }).sort({createdAt:-1});
        return res.status(200).json({
            success:true,
            data:requests,
        });
    }catch(err){
        return res.status(500).json({status:false, message:err.message}, err)
    }
}

module.exports = {empAssert, myRequest}