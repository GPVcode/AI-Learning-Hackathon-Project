import knexLib from 'knex';
import knexConfig from '../utils/knexfile.js';  // import your knex setup
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: './utils/.env'})
const JWT_SECRET = process.env.JWT_SECRET;

const knex = knexLib(knexConfig.development);

const saltRounds = 10;

const hashedPassword = async (plainTextPassword) => {
    return bcrypt.hash(plainTextPassword, saltRounds);
}

// Compare a password
const comparePassword = async (plainTextPassword, hashedPassword) => {
    return bcrypt.compare(plainTextPassword, hashedPassword);
}

const signToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
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

    return token;
};
