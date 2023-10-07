import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';


function Profile() {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        // Fetch user profile data on component mount
        axios.get('/api/users/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (response.data.success) {
                setUserData(response.data.data);
                setUpdatedData(response.data.data); // Setting initial data for editing
            }
        })
        .catch(error => {
            console.error("Error fetching profile data: ", error);
        });
    }, []);

    const handleInputChange = (e) => {
        setUpdatedData({
            ...updatedData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        axios.put('/api/users/profile', updatedData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            if (response.data.success) {
                setIsEditing(false);
                setUserData(response.data.data);
                alert(response.data.message);
            }
        })
        .catch(error => {
            console.error("Error updating profile: ", error);
        });
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>

            {!isEditing ? (
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            ) : (
                <div>
                    <label className="profile-name">
                        Username:
                        <input type="text" name="username" value={updatedData.username} onChange={handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={updatedData.email} onChange={handleInputChange} />
                    </label>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Profile;
