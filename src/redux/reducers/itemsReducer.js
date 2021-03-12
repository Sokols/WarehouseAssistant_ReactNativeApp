import { RESET_DATA, SET_ITEMS } from '../actions/types';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_DATA:
            return { items: [] };
            
        case SET_ITEMS:
            return { ...state, items: action.payload };

        default:
            return state;
    }
};
