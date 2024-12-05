import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, emails, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, emails, password: hashedPassword });
  try {
    await newUser.save();

    res.status(201).json("User registered successfully!");
  } catch (error) {
    next(error); 
    }
};
