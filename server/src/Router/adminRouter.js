const express=require("express");
const router=express.Router();
const {auth}=require("../middleware/authMiddleware");
const { getAllRequests } = require("../Controller/adminController");

router.get("/asset-requests",auth, getAllRequests);

module.exports=router;