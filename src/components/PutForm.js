import React, { Component } from 'react';
import { updateUser } from '../store/actions/auth';
import { connect } from 'react-redux'

class PutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            profileImageUrl: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            this.props.history.push('/');
        }).catch(() => {
            return;
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateUser(this.state).then(() => {
            this.props.history.push('/')
        }).catch(() => {
            return;
        })
    }

    render() {
        const { email, username, profileImageUrl } = this.state;
        const { errors } = this.props;
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Update Profile</h2>
                            {errors.message && <div className='alert alert-danger'>{errors.message}</div>}
                            <label htmlFor='email'>Email:</label>
                            <input
                                type="email"
                                className='form-control' id='email' name='email'
                                onChange={this.handleChange}
                                value={email}
                            />

                            <div>
                                <label htmlFor='username'>Username:</label>
                                <input
                                    type="text"
                                    className='form-control' id='username' name='username'
                                    onChange={this.handleChange}
                                    value={username}
                                />
                                <label htmlFor='profileImageUrl'>Image-Url:</label>
                                <input
                                    type="text"
                                    className='form-control' id='profileImageUrl' name='profileImageUrl'
                                    onChange={this.handleChange}
                                    value={profileImageUrl}
                                />
                            </div>

                            <button className='btn btn-danger btn-block btn-lg mt-4'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, { updateUser })(PutForm)