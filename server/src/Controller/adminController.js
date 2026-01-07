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
    res.status(500).json({
      success: false,
      message: "Failed to fetch requests",
      error: err.message
    });
  }
};


module.exports = { getAllRequests };