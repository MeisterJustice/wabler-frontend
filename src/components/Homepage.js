import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';


const Homepage = ({ currentUser }) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1 className='display-2 text-white'>What's happening?</h1>
                <h4 className='display-4 text-white'>New to Wabler?</h4>
                <Link to='/signup' className='btn btn-primary'>Sign up here</Link>
            </div>
        );
    }
    return (
        <div>
            <MessageTimeline
                profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    )
}

export default Homepage;