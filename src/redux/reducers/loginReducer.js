import { ERROR_OCCURED, ERROR_REMOVED } from '../actions/types';

const INITIAL_STATE = {
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR_OCCURED:
            return { errorMessage: action.payload };

        case ERROR_REMOVED:
            return { errorMessage: '' };

        default:
            return state;
    }
};
