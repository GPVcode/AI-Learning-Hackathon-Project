import * as userService from '../services/userService.js';


export const register = async (req, res, next) => {
    try {
        const user = await userService.register(req.body);
        delete user.password;
        res.status(201).json({ success: true, data: user, message: "Registration successful!" });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { token, username, email } = await userService.login(req.body);
        res.status(200).json({ success: true, data: { token, username, email }, message: "Logged in successfully!" });
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try{
        await userService.logout(req.user);
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch(error){
        next(error);
    }
};

export const getProfile = async (req, res, next) => {
    try {
        const user = await userService.fetchUserProfile(req.user.id);
        console.log("user:", user)
        delete user.password; // omitting sensitive information
        res.json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const updatedUser = await userService.updateUserProfile(req.user.id, req.body);
        delete updatedUser.password;
        res.json({ success: true, data: updatedUser, message: "Profile updated successfully!" });
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