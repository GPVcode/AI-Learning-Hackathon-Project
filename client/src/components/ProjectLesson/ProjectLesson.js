import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './StoryStyle.css';
import HintIcon from '@mui/icons-material/EmojiObjects';
import SolutionIcon from '@mui/icons-material/AssignmentTurnedIn';
import Chatbox from '../Chatbox/Chatbox.js';

function dedent(str) {
    // Match the smallest indentation from all lines (excluding the first and last line if they're blank)
    const match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) return str; // If there's no indentation, return the string as is

    const indent = Math.min(...match.map(x => x.length)); // Find the smallest indentation
    const re = new RegExp(`^[ \\t]{${indent}}`, 'gm'); // Construct a regex to remove that much indentation

    return str.replace(re, '').trim(); // Remove that much indentation from all lines and trim the string
}


function useLesson(projectId, currentStepLessonId) {
    const [lesson, setLesson] = useState(null);
    const [error, setError] = useState(null);
    const { lessonId } = useParams();

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                const effectiveLessonId = currentStepLessonId || lessonId;
                const response = await axios.get(`https://learning-loom.onrender.com/api/users/projects/${projectId}/lessons/${effectiveLessonId}`);
                setLesson(response.data.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchLesson();
    }, [projectId, lessonId, currentStepLessonId]);

    return { lesson, error };
}

function ProjectLesson() {
    const [step, setStep] = useState(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(-1);
    const { projectId } = useParams();
    const [showSolution, setShowSolution] = useState(false);
    const [showHint, setShowHint] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const { lesson, lessonError } = useLesson(projectId, step?.lesson_id);

    useEffect(() => {
        if (currentStepIndex === 0) {
            const fetchFirstStep = async () => {
                try {
                    const response = await axios.get(`https://learning-loom.onrender.com/api/users/projects/${projectId}/lessons/${lesson.id}/steps/1`);
                    setStep(response.data.data);
                } catch (error) {
                    console.error("Error fetching the step:", error);
                }
            };

            fetchFirstStep();
        }
    }, [currentStepIndex, projectId, lesson]);

    const handleContinue = async () => {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);

        setShowSolution(false);  // Hide solution
        setShowHint(false);      // Hide hint

        try {
            const response = await axios.get(`https://learning-loom.onrender.com/api/users/projects/${projectId}/lessons/${lesson.id}/steps/${step.id + 1}`);
            setStep(response.data.data);
        } catch (error) {
            console.error("Error fetching the next step:", error);
        }
    };

    const handleBack = () => {
        setCurrentStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));

        setShowSolution(false);  // Hide solution
        setShowHint(false);      // Hide hint
    };

    if (!lesson) {
        return <div>Loading...</div>;
    }

    const toggleSolution = () => {
        setShowSolution(!showSolution);
    }

    const toggleHint = () => {
        setShowHint(!showHint);
    }

    return (
        <div className="lesson-container">
            {lesson ? (
                <>
                    <h2 className="lesson-title">{lesson.title}</h2>
                    <p className="lesson-content">{lesson.content}</p>
    
                    {currentStepIndex === -1 ? (
                        <button className="start-button" onClick={() => setCurrentStepIndex(0)}>Start</button>
                    ) : (
                        step && (
                            <div className="step-card">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-content">{step.content}</p>
                                <div className="action-buttons">
                                    <button className={`icon-button ${showHint ? 'activated' : ''}`} onClick={toggleHint}>
                                        <HintIcon /> {showHint ? 'Hide' : 'Show'} Help
                                    </button>
                                    <button className={`icon-button ${showSolution ? 'activated' : ''}`} onClick={toggleSolution}>
                                        <SolutionIcon /> {showSolution ? 'Hide' : 'Show'} Solution
                                    </button>
                                </div>
                                <Chatbox stepId={step.id} />

                                <div className="solution-container">
                                    {showHint && <p className="hint-text">{step.hint}</p>}
                                    {showSolution && <pre className="solution-code"><code>{dedent(step.solution_code)}</code></pre>}
                                </div>
    
                                <div className="navigation-buttons">
                                    {currentStepIndex > 0 && (
                                        <button className="secondary-button" onClick={handleBack}>Back</button>
                                    )}
                                    <button className="primary-button" onClick={handleContinue}>Continue</button>
                                </div>

                                
                            </div>
                        )
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}    

export default ProjectLesson;