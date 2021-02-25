import { ADD_PLACE } from '../actions/types';

const INITIAL_STATE = {
    places: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return state;

        default:
            return state;
    }
};
