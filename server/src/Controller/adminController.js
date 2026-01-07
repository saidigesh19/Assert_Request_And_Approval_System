const assert = require("../Model/assert");

const getAllRequests=async(req,res)=>{
    try{
        const requests=(await assert
            .find()
            .populate("employee","name", "email")
            .sort({createdAt:-1}));
        res.status(200).json({success:true,data:requests})
    }catch(err){
        res.status(500).json({success:false,message:"Failed to fetch requests",error:err.message});
    }
}

module.exports={getAllRequests}