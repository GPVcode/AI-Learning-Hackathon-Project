import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ProjectDetail.css';

function ProjectDetail({ match }) {
    const [project, setProject] = useState(null);

    const { id } = useParams();

    // const startProject = () => {
    //     console.log('Starting the project...');
    //     // logic for starting the project here.
    // };

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/api/users/projects/${id}`);
                setProject(response.data.data);
            } catch (error) {
                console.error("Error fetching the project:", error);
            }
        };

        fetchProject();
    }, [id, project]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="project-detail-container">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-difficulty">Difficulty: {project.difficulty}</p>
            <Link to={`/projects/${project.id}/lessons/1`}>Start</Link>
        </div>
    );
}

export default ProjectDetail;
