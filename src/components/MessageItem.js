import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser, id, message_id }) => {
    console.log(isCorrectUser)
    return (
        <div>
            
                <li className='list-group-item'>
                    <img
                        src={profileImageUrl || DefaultProfileImg}
                        alt="username"
                        height='100'
                        width='100'
                        className='timeline-image'
                    />
                    <div className="message-area">
                        <Link to='/'>@{username} &nbsp;</Link>
                        <span className="text-muted">
                            <Moment className="text-muted" format="Do MMM YYYY">
                                {date}
                            </Moment>
                        </span>
                        <p>
                            {text}
                        </p>
                        {isCorrectUser && (
                            <a onClick={removeMessage} className="btn btn-danger">Delete</a>
                        )}
                    </div>
                    <div>
                    <Link to={`/users/${id}/messages/${message_id}`}>
                        <div className="btn btn-block btn-primary">go to</div>
                    </Link>
                    </div>
                </li>

        </div>
    )
}

export default MessageItem;