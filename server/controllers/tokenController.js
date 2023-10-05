import jwt from 'jsonwebtoken';
import * as userService from '../services/userService.js';

export const renewToken = async (req, res, next) => {
    try{
        // The verifyToken middleware should have decoded the token and attached the user's ID to the request
        const userId = req.userId;

        // validate that use still exists
        const user = await userService.findUserById(userId);

        if(!user){
            throw new Error('The bearer of this token is not recognized.');
        }

        const newToken = userService.signToken(userId);
        res.json({ token: newToken });

    } catch(error){
        next(error);
    }

};


