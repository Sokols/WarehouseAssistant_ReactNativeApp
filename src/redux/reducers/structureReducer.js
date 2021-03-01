import { GET_PLACES, ADD_PLACE } from '../actions/types';

const INITIAL_STATE = {
    places: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLACES:
            return { ...state, places: action.payload };

        case ADD_PLACE:
            return state;

        default:
            return state;
    }
};
