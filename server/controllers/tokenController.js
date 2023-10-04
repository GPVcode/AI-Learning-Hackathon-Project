import jwt from 'jsonwebtoken';

export const renewToken = (req, res) => {
    const userId = req.userId; // This comes from the verifyToken middleware

    // Generate a new token
    const newToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token: newToken });
};

// export default renewToken;
