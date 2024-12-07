// import express from 'express';
// import { signup } from '../controllers/auth.controller.js';

//  const router =  express.Router();

//  router.post(`/signup`, signup);

//  export default router;
import express from 'express';
import { signup } from '../controllers/auth.controller.js'; // Import signup from controller

const router = express.Router();

// POST request to handle user signup
router.post('/signup', signup);

export default router;
