import { RESET_DATA, GET_PLACES, SET_REF } from '../actions/types';

const INITIAL_STATE = {
    ref: null,
    places: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_DATA: 
            return { ref: null, places: [] };
            
        case SET_REF:
            return { ...state, ref: action.payload };

        case GET_PLACES:
            return { ...state, places: action.payload };

        default:
            return state;
    }
};
