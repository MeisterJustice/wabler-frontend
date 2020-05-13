import { LOAD_MESSAGE } from '../actionTypes';

const message = (state = {}, action) => {
    switch (action.type) {
        case LOAD_MESSAGE:
            return {...action.message};
        default:
            return state;
    }
}

export default message;