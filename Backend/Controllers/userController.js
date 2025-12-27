// userController.js
const verifyUser = (req, res) => {
  res.status(200).json({
    success: true,
    username: req.user.username,
  });
};

module.exports = { verifyUser }; // ✅ must export as object
