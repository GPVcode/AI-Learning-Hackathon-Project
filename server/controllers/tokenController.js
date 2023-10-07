import * as userService from '../services/userService.js';

export const renewToken = async (req, res, next) => {
    try {
        // The verifyToken middleware should have decoded the token and attached the user's ID to the request
        const userId = req.userId;
        
        // validate that user still exists
        const user = await userService.findUserById(userId);

        if (!user) {
            throw new Error('The bearer of this token is not recognized.');
        }

        const newToken = userService.signToken(userId);
        res.json({ 
            success: true, // Indicating the request was successful
            token: newToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        next(error);
    }
};
