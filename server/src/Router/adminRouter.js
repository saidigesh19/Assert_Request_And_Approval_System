const express=require("express");
const router=express.Router();
const {auth}=require("../middleware/authMiddleware");
const { getAllRequests, approveRequest, rejectRequest } = require("../Controller/adminController");
const { isAdmin } = require("../middleware/roleMiddleware");

router.get("/assetrequests",auth, isAdmin, getAllRequests);
router.put("/assetrequests/:id/approve",auth, isAdmin, approveRequest);
router.put("/assetrequests/:id/reject",auth, isAdmin, rejectRequest);

module.exports=router;