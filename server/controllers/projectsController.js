import * as projectsService from '../services/projectsService.js';


export const getProjects = async (req, res, next) => {
    try {
        console.log("0000#")
        const projects = await projectsService.fetchAllProjects();

        res.json({ success: true, data: projects });
    } catch (error) {
        next(error);
    }
};

export const getLessons = async (req, res, next) => {
    try {
        console.log("###")

        const { projectId } = req.params; // Getting project ID from URL parameters
        const lessons = await projectsService.fetchLessonsByProjectId(projectId);
        console.log("gg#")

        res.json({ success: true, data: lessons });
    } catch (error) {
        next(error);
    }
};

export const getSteps = async (req, res, next) => {
    try {
        const { lessonId } = req.params; // Getting lesson ID from URL parameters
        const steps = await projectsService.fetchStepsByLessonId(lessonId);
        res.json({ success: true, data: steps });
    } catch (error) {
        next(error);
    }
};
