const AssetRequest = require("../Model/assert");

const getAllRequests = async (req, res) => {
  try {
    const requests = await AssetRequest
      .find()
      .populate("employee", "name email role")
      .sort({ createdAt: -1 }); 
    return res.status(200).json({
      success: true,
      data: requests
    });
  } catch (err) {
    console.log(err,"err");
    res.status(500).json({
      success: false,
      message: "Failed to fetch requests",
      error: err.message
    });
  }
};

const approveRequest=async(req,res)=>{
    try{
        const {id}=req.params;
        const request=await AssetRequest.findByIdAndUpdate(
            id,{status:"approved",approvedBy:req.user._id},{new:true}
        );
        if(!request) return res.status(404).json({success:false,message:"Request not found"});
        res.status(200).json({success:true,data:request});
    }catch(err){
        res.status(500).json({success:false,message:"Failed to approve request", error: err.message})
    }
}

const rejectRequest=async(req,res)=>{
    try{
        const {id}=req.params;
        const request=await AssetRequest.findByIdAndUpdate(
            id,{status:"rejected",approvedBy:req.user._id},{new:true}
        );
        if(!request) return res.status(404).json({success:false,message:"Request not found"});
        res.status(200).json({success:true,data:request});
    }catch(err){
        res.status(500).json({success:false,message:"Failed to reject request", error: err.message})
    }
}

module.exports = { getAllRequests,approveRequest, rejectRequest };