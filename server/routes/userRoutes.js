import express from 'express';
import { register, login, logout, getProfile, updateProfile } from '../controllers/userController.js';
import { renewToken } from '../controllers/tokenController.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);

router.get('/renewToken', verifyToken, renewToken);


export default router;
