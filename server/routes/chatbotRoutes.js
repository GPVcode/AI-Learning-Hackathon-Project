import express from "express";
import getAiResponse from "../middlewares/openAiMiddleware.js"; // Adjust the path if required

const router = express.Router();

router.post('/response/:stepId', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const stepId = req.params.stepId;

        const aiResponse = await getAiResponse(userMessage, stepId);

        res.json({ success: true, message: aiResponse });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
