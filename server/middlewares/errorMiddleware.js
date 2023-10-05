// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send({ message: 'Invalid token' });
    }

    // Handle other types of errors here, if needed

    res.status(500).send('Something broke in error middleware!');
};

export default errorHandler;
