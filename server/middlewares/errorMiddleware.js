// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({ message: 'Invalid token' });
    }

    res.status(500).json({ error: err.message});
};

export default errorHandler;
