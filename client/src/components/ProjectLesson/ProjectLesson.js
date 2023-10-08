import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './StoryStyle.css';

function ProjectLesson() {
    const [lesson, setLesson] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0); // Starting from the first step
    const [hasStarted, setHasStarted] = useState(false); // State to control if the lesson has started
    const { projectId, lessonId } = useParams();

    useEffect(() => {
        const fetchLessonAndStep = async () => {
            try {
                const lessonResponse = await axios.get(`/api/users/projects/${projectId}/lessons/${lessonId}`);
                setLesson(lessonResponse.data.data);

                // Only fetch the step if the lesson has been started
                if (hasStarted && currentStepIndex >= 0) {
                    const stepResponse = await axios.get(`/api/users/projects/${projectId}/lessons/${lessonId}/steps/${currentStepIndex + 1}`); // Adding 1 as our stepId starts from 1
                    setCurrentStep(stepResponse.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchLessonAndStep();
    }, [projectId, lessonId, currentStepIndex, hasStarted]);

    const handleNextStep = () => {
        setCurrentStepIndex(prevIndex => prevIndex + 1);
    };

    const handlePreviousStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prevIndex => prevIndex - 1);
        }
    };

    if (!lesson) {
        return <div>Loading...</div>;
    }
    console.log("current step: ", currentStep)

    return (
        <div className="lesson-container">
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>

            {!hasStarted ? (
                <button onClick={() => setHasStarted(true)} className="start-button">Start Lesson</button>
            ) : (
                <>
                    {currentStep && (
                        <div className="step">
                            <h3>{currentStep.title}</h3>
                            <p>{currentStep.content}</p>
                        </div>
                    )}

                    <div className='lesson-btns'>
                        <button onClick={handlePreviousStep} className="continue-button" disabled={currentStepIndex === 0}>Back</button>
                        <button onClick={handleNextStep} className="continue-button">Continue</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProjectLesson;
