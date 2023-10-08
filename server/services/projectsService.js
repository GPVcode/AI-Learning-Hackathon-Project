import knexLib from 'knex';
import knexConfig from '../knexfile.js';  // import your knex setup


const knex = knexLib(knexConfig.development);

// Fetch all projects
export const fetchAllProjects = async () => {
    return knex('projects').select('*');
};

// Fetch lessons for a particular project
export const fetchLessonsByProjectId = async (projectId) => {
    return knex('lessons').where('project_id', projectId).select('*').orderBy('order');
};

// Fetch steps for a particular lesson
export const fetchStepsByLessonId = async (lessonId) => {
    return knex('steps').where('lesson_id', lessonId).select('*').orderBy('order');
};
