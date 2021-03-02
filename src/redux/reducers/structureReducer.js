import { GET_PLACES } from '../actions/types';

const INITIAL_STATE = {
    places: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLACES:
            return { ...state, places: action.payload };

        default:
            return state;
    }
};
