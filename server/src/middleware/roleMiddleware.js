const isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access only",
    });
  }
  next();
};

const isEmployee = (req, res, next) => {
  if (req.user.role !== "Employee") {
    return res.status(403).json({
      success: false,
      message: "Employee access only",
    });
  }
  next();
};

module.exports = { isAdmin, isEmployee };