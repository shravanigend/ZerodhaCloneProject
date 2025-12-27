const { Signup,Login} = require("../Controllers/AuthController");
const { protect } =require("../Middleware/userMiddleware");
const router = require("express").Router();
const { verifyuser} = require("../Controllers/userController");
const { userVerification } =require("../Middleware/AuthMiddleware");

//router.post("/signup-test", (req, res) => {
//console.log("Signup-test route hit!", req.body);
//res.json({ success: true });
// });

router.post("/signup", Signup);
router.post('/login', Login);




router.post('/',userVerification)
module.exports = router;