import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];  // Assuming 'Bearer TOKEN_VALUE' format

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // Store the decoded payload so other middleware/routes can use it
        req.userId = decoded.userId;

        next();
    });
};

export default verifyToken;
