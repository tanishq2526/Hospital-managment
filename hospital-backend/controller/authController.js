import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ msg: "Email already exists" });

    const hashedPass = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPass, role });
    await user.save();
    res.status(201).json({ msg: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error in registration", error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ msg: "Error in login", error: err.message });
  }
};
