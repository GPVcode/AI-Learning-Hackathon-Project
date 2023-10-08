import knexLib from 'knex';
import knexConfig from '../knexfile.js';  // import your knex setup
import dotenv from 'dotenv';
dotenv.config({ path: './utils/.env'})

const knex = knexLib(knexConfig.development);

// Fetch all projects
export const fetchAllProjects = async () => {
    return knex('projects').select('*');
};

export const fetchProject = async (projectId) => {
    return await knex('projects').where({ id: projectId }).first();
};

export const fetchLesson = async (lessonId) => {
    return await knex('lessons').where({ id: lessonId }).first();
};

export const fetchStep = async (stepId) => {
    return await knex('steps').where({ id: stepId }).first();
};

// // Fetch lessons for a particular project
// export const fetchLessonsByProjectId = async (projectId) => {
//     return knex('lessons').where('project_id', projectId).select('*').orderBy('order');
// };

// // Fetch steps for a particular lesson
// export const fetchStepsByLessonId = async (lessonId) => {
//     return knex('steps').where('lesson_id', lessonId).select('*').orderBy('order');
// };
