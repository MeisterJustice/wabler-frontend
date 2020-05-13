import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import messages from './messages';
import message from './message';

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages,
    message
});

export default rootReducer;