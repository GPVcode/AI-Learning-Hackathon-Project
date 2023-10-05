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

    return token;
};


export const logout = async (user) => {
    // Placeholder for any server-side logout operations
    // For instance, marking the user as "offline" in the database
    console.log(`User with ID ${user.id} has logged out.`);
};
