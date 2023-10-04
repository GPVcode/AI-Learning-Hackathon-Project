import * as userService from '../services/userService.js';


export const register = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const token = await userService.login(req.body);
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try{
        await userService.logout(req.user);
        res.status(200).json({ message: "Logged out successfully" });
    } catch(error){
        next(error);
    }
}