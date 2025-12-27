const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretTken");
const bcrypt = require("bcryptjs");

/* ================= SIGNUP ================= */
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // ✅ Hash password manually
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
    });

  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= LOGIN ================= */
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        email: user.email,
        username: user.username,
      },
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
