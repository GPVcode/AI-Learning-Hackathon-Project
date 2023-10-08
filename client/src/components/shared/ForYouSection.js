import React from 'react';
import '../../assets//styles/ForYouSection.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ForYouSection = ({ isAuthenticated }) => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="for-you-section">
            <h1>{isAuthenticated ? `FOR YOU, ${user.username}` : 'Build Your Skills'}</h1>
            
            <p>{isAuthenticated ? 
                'Dive back into your learning adventure and discover new horizons!' : 
                'Embark on an adventurous journey where learning meets excitement and wonder.'
            }</p>
            
            <Link to={isAuthenticated ? '/profile' : '/register'} className="get-started-btn">
                {isAuthenticated ? 'Continue Learning' : 'Get Started'}
            </Link>
        </div>
    );
}

export default ForYouSection;
