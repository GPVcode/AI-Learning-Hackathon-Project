import express from 'express';
import { register, login, logout } from '../controllers/userController.js';
import { renewToken } from '../controllers/tokenController.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.post('/logout', logout);

router.get('/renewToken', verifyToken, renewToken);


export default router;
