import * as projectsService from '../services/projectsService.js';


export const getProjects = async (req, res, next) => {
    try {
        const projects = await projectsService.fetchAllProjects();

        res.json({ success: true, data: projects });
    } catch (error) {
        next(error);
    }
};

export const getProjectById = async (req, res, next) => {
    try {
        const projectId = req.params.id;

        const project = await projectsService.fetchProject(projectId);
        
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found.' });
        }

        res.json({ success: true, data: project });
    } catch (error) {
        next(error);
    }
};
export const getLesson = async (req, res, next) => {
    try {
        const lessonId = req.params.lessonId;
        const lesson = await projectsService.fetchLesson(lessonId);
        
        if (!lesson) {
            return res.status(404).json({ success: false, message: 'Lesson not found.' });
        }

        res.json({ success: true, data: lesson });
    } catch (error) {
        next(error);
    }
};

export const getStep = async (req, res, next) => {
    try {
        const stepId = req.params.stepId;
        const step = await projectsService.fetchStep(stepId);
        
        if (!step) {
            return res.status(404).json({ success: false, message: 'Step not found.' });
        }

        res.json({ success: true, data: step });
    } catch (error) {
        next(error);
    }
};