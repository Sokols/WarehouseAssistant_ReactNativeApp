import { SIGNIN, SIGNOUT, ERROR_OCCURED, ERROR_REMOVED } from '../actions/types';

const INITIAL_STATE = {
    errorMessage: '',
    token: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case SIGNIN:
            return { errorMessage: '', token: action.payload };

        case SIGNOUT:
            return { errorMessage: '', token: null };

        case ERROR_OCCURED:
            return { ...state, errorMessage: action.payload };

        case ERROR_REMOVED:
            return { ...state, errorMessage: '' };

        default:
            return state;
    }
};
