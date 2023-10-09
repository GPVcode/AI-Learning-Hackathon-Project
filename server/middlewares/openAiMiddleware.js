import OpenAI from "openai";
import { fetchStep } from "../services/projectsService.js"; // Replace with your actual path

const openai = new OpenAI(process.env.OPENAI_API_KEY);

function executeCode(code) {
    try {
        return eval(code);
    } catch (error) {
        return error.message;
    }
}

function compareCodeOutcomes(userCodeOutcome, solutionCodeOutcome) {
    if (userCodeOutcome === solutionCodeOutcome) {
        return {
            success: true,
            feedback: "The outcome of your solution matches the expected outcome! Well done!"
        };
    } else {
        return {
            success: false,
            feedback: `The outcome of your solution doesn't match the expected outcome. Your outcome was: ${userCodeOutcome}. Expected was: ${solutionCodeOutcome}`
        };
    }
}

async function getAiResponse(userMessage, stepId) {
    const step = await fetchStep(stepId);
    if (!step) {
        throw new Error("Step not found.");
    }

    // Try to execute user's code and compare with solution code
    const userCodeOutcome = executeCode(userMessage);
    const solutionCodeOutcome = executeCode(step.solution_code);
    
    const codeComparison = compareCodeOutcomes(userCodeOutcome, solutionCodeOutcome);

    if (codeComparison.success) {
        return codeComparison.feedback;
    } else {
        // If the outcome doesn't match, consult the AI for guidance
        const messages = [
            {
                "role": "system",
                "content": `Your task is to perform the following: ${step.content}.`
            },
            {
                "role": "user",
                "content": userMessage
            }
        ];

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
                // function_call: "auto",
            });

            const responseMessage = response.choices[0].message;

            if (responseMessage.function_call) {
                // Placeholder for potential future function calls
                return "Function calls from the chatbot are not supported at the moment.";
            } else {
                return `${responseMessage.content.trim()} Also, ${codeComparison.feedback}`;
            }
        } catch(error) {
            console.error("Error calling OpenAI API:", error);
            return "Sorry, there was a problem processing your request. Please try again later.";
        }
    }
}

export default getAiResponse;
