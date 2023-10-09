export const registerUser = async (userData) => {
    const response = await fetch('https://learning-loom.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    return response.json();
}

export const loginUser = async (userData) => {
    const response = await fetch('https://learning-loom.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    return response.json();
}

export const logoutUser = async () => {
    const response = await fetch('https://learning-loom.onrender.com/api/users/logout', {
        method: 'POST'
    });

    return response.json();
}

export const verifyToken = async (token) => {
    try {
        const response = await fetch('https://learning-loom.onrender.com/api/users/renewToken', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (response.ok && data.success) {
            return { success: true, user: data.user };
        } else {
            return { success: false, error: data.message || 'Token validation failed.' };
        }

    } catch (error) {
        return { success: false, error: error.message || 'An unexpected error occurred.' };
    }
};
