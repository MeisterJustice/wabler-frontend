import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postMessage } from '../store/actions/messages';

class MessageForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    handleNewMessage = e => {
        e.preventDefault();
            this.props.postMessage(this.state.message);
            this.setState({ message: '' });
            this.props.history.push('/')

    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
       return (
            <div>
                <form onSubmit={this.handleNewMessage}>
                    {this.props.errors.message && (
                        <div className='alert alert-danger'>
                            {this.props.errors}
                        </div>
                    )}
                    <input
                        type="text"
                        name='message'
                        className='form-control'
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button type='submit' className='btn btn-lg btn-block btn-success'>Post</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { postMessage })(MessageForm)