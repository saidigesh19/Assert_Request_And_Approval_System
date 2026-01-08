const express=require("express");
const router=express.Router();
const {auth}=require("../middleware/authMiddleware");
const { getAllRequests, approveRequest, rejectRequest } = require("../Controller/adminController");
const { isAdmin } = require("../middleware/roleMiddleware");

router.get("/asset-requests",auth, isAdmin, getAllRequests);
router.put("/asset-requests/:id/approve",auth, isAdmin, approveRequest);
router.put("/asset-requests/:id/reject",auth, isAdmin, rejectRequest);

module.exports=router;