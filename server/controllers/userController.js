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

export const getProfile = async (req, res, next) => {
    try {
        const user = await userService.getProfile(req.user.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateProfile(req.user.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// export const forgotPassword = async (req, res, next) => {
//     try {
//         const email = req.body.email;
//         await userService.generateResetToken(email);
//         res.status(200).json({ message: "Password reset email sent." });
//     } catch (error) {
//         next(error);
//     }
// };

// export const resetPassword = async (req, res, next) => {
//     try {
//         const { token, newPassword } = req.body;
//         await userService.resetPassword(token, newPassword);
//         res.status(200).json({ message: "Password reset successfully." });
//     } catch (error) {
//         next(error);
//     }
// };