import knexLib from 'knex';
import knexConfig from '../knexfile.js';  // import your knex setup
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './utils/.env'})
const JWT_SECRET = process.env.JWT_SECRET;
// import nodemailer from 'nodemailer';

const knex = knexLib(knexConfig.development);

const saltRounds = 10;

const hashedPassword = async (plainTextPassword) => {
    return bcrypt.hash(plainTextPassword, saltRounds);
}

// Compare a password
const comparePassword = async (plainTextPassword, hashedPassword) => {
    return bcrypt.compare(plainTextPassword, hashedPassword);
}

export const signToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const findUserById = async (id) => {
    return await knex('users').where({ id }).first();
};

export const register = async (userData) => {
    const { username, email, password } = userData;

    const password_hash = await hashedPassword(password);

    const user = await knex('users').insert({
        username,
        email,
        password_hash,
    });

    return user;
};

export const login = async (loginData) => {
    const { email, password } = loginData;

    const user = await knex('users').where({ email }).first();

    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isValidPassword = await comparePassword(password, user.password_hash);
   

    if (!isValidPassword) {
        throw new Error('Invalid credentials');
    }

    // Generate a JWT token or any authentication token
    const token = signToken(user.id); 

    return { token, username: user.username, email: user.email };
};

export const logout = async (user) => {
    // Placeholder for any server-side logout operations
    // For instance, marking the user as "offline" in the database
    console.log(`User with ID ${user.id} has logged out.`);
};

export const fetchUserProfile = async (userId) => {
    return knex('users').where({ id: userId }).first(['id', 'username', 'email']); // Do not send the password hash!
};

export const updateUserProfile = async (userId, updatedData) => {
    await knex('users').where({ id: userId }).update(updatedData);
    return fetchUserProfile(userId);
};


// Password reset functions

// let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'test@ethereal.email',  // This is a placeholder, replace it with your real credentials
//         pass: 'password'               // Same as above
//     }
// });

// export const generateResetToken = async (email) => {
//     // Check if email exists
//     const user = await knex('users').where({ email }).first();
//     if (!user) throw new Error('Email not found.');

//     // Generate a token
//     const token = crypto.randomBytes(20).toString('hex');

//     // Store the token in the database with an expiry time
//     await knex('password_reset_tokens').insert({
//         user_id: user.id,
//         token,
//         expires_at: new Date(Date.now() + 3600000)  // 1 hour from now
//     });

//     // Send the email with the reset link
//     // Use your preferred email sending method
// };

// export const resetPassword = async (token, newPassword) => {
//     // Validate token and get user
//     const resetToken = await knex('password_reset_tokens')
//         .where({ token })
//         .andWhere('expires_at', '>', new Date())
//         .first();
//     if (!resetToken) throw new Error('Invalid or expired token.');

//     // Hash the new password
//     const hashed = await hashedPassword(newPassword);

//     // Update user's password
//     await knex('users').where({ id: resetToken.user_id }).update({ password_hash: hashed });

//     // Invalidate the token
//     await knex('password_reset_tokens').where({ id: resetToken.id }).del();
// };