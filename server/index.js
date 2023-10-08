import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import knexLib from 'knex';
dotenv.config({ path: './utils/.env'})
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorMiddleware.js';
import limiter from './middlewares/rateLimiter.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

const knex = knexLib({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

// Testing Database Connection
knex.raw('SELECT 1+1 AS result')
    .then(() => console.log('Connected to the database.'))
    .catch((err) => {
        console.error('Error connecting to the database:', err);
        process.exit(1);
});

app.use('/api/users', userRoutes);
app.use(limiter);
app.use(errorHandler);
app.set('trust proxy', 1);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke in server!');
});

// Check if necessary environment variables are set
if (!process.env.PORT || !process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    console.error("Missing environment variable...");
    process.exit(1);
}

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})