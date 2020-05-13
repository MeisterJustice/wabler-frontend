import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../store/actions/messages';
import DefaultProfileImg from '../images/default-profile-image.jpg';
import Moment from 'react-moment';

class MessageShow extends Component {
    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.id, this.props.match.params.message_id);
    }

    render() {
        const { message, } = this.props;
        console.log(message.user)
        return (
            <div className='row col-sm-8'>
                <li className='list-group-item'>
                    <div className="message-area">
                        <span className="text-muted">
                            <Moment className="text-muted" format="Do MMM YYYY">
                                {message.createdAt}
                            </Moment>
                        </span>
                        <p>
                            {message.text}
                        </p>
                    </div>
                </li>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        message: state.message,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchMessage })(MessageShow);