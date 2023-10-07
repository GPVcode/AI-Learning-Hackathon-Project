// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // Default status code and message
    let statusCode = 500;
    let message = 'An unexpected error occurred';

    if (err.name === 'UnauthorizedError') {
        statusCode = 401;
        message = 'Invalid token';
    }
    // Example: Handling validation errors
    else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message;
    }

    // If the error has a status code attached (like some libraries do), use that
    if (err.statusCode) {
        statusCode = err.statusCode;
    }

    res.status(statusCode).json({ error: message });
};

export default errorHandler;
