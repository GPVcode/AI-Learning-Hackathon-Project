import express from 'express';
// import { register, login, logout, getProfile, updateProfile } from '../controllers/userController.js';
import { register, login, logout } from '../controllers/userController.js';
import { getProjects, getLessons, getSteps } from '../controllers/projectsController.js';

import { renewToken } from '../controllers/tokenController.js';
import verifyToken from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.post('/logout', logout);

// router.get('/profile', verifyToken, getProfile);
// router.put('/profile', verifyToken, updateProfile);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);

router.get('/projects', getProjects); // For fetching all projects
router.get('/course/:courseId/lessons', getLessons); // For fetching lessons of a specific project
router.get('/lessons/:lessonId/steps', getSteps); // For fetching steps of a specific lesson


router.get('/renewToken', verifyToken, renewToken);

export default router;