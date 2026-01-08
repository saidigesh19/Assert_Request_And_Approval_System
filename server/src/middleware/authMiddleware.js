const jwt = require("jsonwebtoken");
const User = require("../Model/auth");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    req.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

module.exports = { auth };
