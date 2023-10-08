// src/components/Step/Step.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Step() {
    const [step, setStep] = useState(null);
    const { projectId, lessonId, stepId } = useParams();

    useEffect(() => {
        const fetchStep = async () => {
            try {
                const response = await axios.get(`/api/users/projects/${projectId}/lessons/${lessonId}/steps/${stepId}`);
                setStep(response.data.data);
            } catch (error) {
                console.error("Error fetching the step:", error);
            }
        };

        fetchStep();
    }, [projectId, lessonId, stepId]);

    if (!step) {
        return <div>Loading...</div>;
    }

    return (
        <div className="step-container">
            <h3>{step.title}</h3>
            <p>{step.content}</p>
            {/* Add any additional content or structure you need here */}
        </div>
    );
}

export default Step;
