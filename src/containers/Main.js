import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser, updateUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';
import PutForm from '../components/PutForm';
import MessageShow from '../components/MessageShow';

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path='/' render={props => <Homepage errors={errors} currentUser={currentUser} {...props} />}></Route>
                <Route
                    exact
                    path='/signin'
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                {...props}
                                buttonText="Login"
                                heading="Welcome Back"
                            />
                        )
                    }}>
                </Route>
                <Route
                    exact
                    path='/signup'
                    render={props => {
                        return (
                            <AuthForm
                                removeError={removeError}
                                errors={errors}
                                onAuth={authUser}
                                {...props}
                                signup
                                buttonText="Sign me up"
                                heading="Join Wabler Today!"
                            />
                        )
                    }}>
                </Route>
                <Route
                    exact
                    path='/users/:id'
                    component={withAuth(PutForm)}
                    >
                </Route>
                <Route 
                    exact path='/users/:id/messages/:message_id'
                    render={props=> {
                        return (
                            <MessageShow  {...props}/>
                        )
                    }}
                >

                </Route>
                <Route 
                    exact path='/users/:id/messages/new'
                    component={withAuth(MessageForm)}
                >

                </Route>
                
            </Switch>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, { authUser, removeError, updateUser })(Main));