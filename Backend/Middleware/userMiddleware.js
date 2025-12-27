const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

module.exports.protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("username");

    if (!user) {
      return res.status(401).json({ success: false });
    }

    req.user = user;
    next(); // IMPORTANT
    // MUST CALL NEXT

  } catch (err) {
    return res.status(401).json({ success: false });
  }
};
