import express from 'express';
// import { register, login, logout, getProfile, updateProfile } from '../controllers/userController.js';
import { register, login, logout } from '../controllers/userController.js';
import { getProjects, getProjectById, getLesson, getStep } from '../controllers/projectsController.js';

import { renewToken } from '../controllers/tokenController.js';
import verifyToken from '../middlewares/authMiddleware.js';
import { param } from 'express-validator';

const router = express.Router();

router.post('/register', register)
router.post('/login', login);
router.post('/logout', logout);


router.get('/projects', getProjects); // For fetching all projects
router.get('/projects/:id', [
    param('id').isInt().withMessage('Project ID must be an integer')
], getProjectById);


// Fetch a specific lesson for a given project
router.get('/projects/:projectId/lessons/:lessonId', getLesson);
// Fetch a specific step for a given lesson
router.get('/projects/:projectId/lessons/:lessonId/steps/:stepId',  getStep);



// router.get('/profile', verifyToken, getProfile);
// router.put('/profile', verifyToken, updateProfile);
// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);

router.get('/renewToken', verifyToken, renewToken);

export default router;