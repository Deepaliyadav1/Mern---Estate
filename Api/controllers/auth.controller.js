import User from '../models/user.model.js';  
import bcryptjs from 'bcryptjs';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ success: false, message: "Username already exists" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });


    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully!" });

  } catch (error) {
    next(error); 
  }
};
