import { RESET_DATA, SET_PLACES, SET_REF } from '../actions/types';

const INITIAL_STATE = {
    ref: null,
    placesToDisplay: [],
    refLevel: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_DATA: 
            return { ref: null, placesToDisplay: [], refLevel: 0 };
            
        case SET_REF:
            return { ...state, ref: action.payload.ref, refLevel: state.refLevel + action.payload.refLevel };

        case SET_PLACES:
            return { ...state, placesToDisplay: action.payload };

        default:
            return state;
    }
};
