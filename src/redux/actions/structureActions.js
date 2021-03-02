import { GET_PLACES } from './types';
import { getData, addData } from '../../data/firestore';

export const getPlaces = () => (dispatch) => {
    getData(dispatch, GET_PLACES)
};

export const addPlace = name => () => {
    addData(name);
};

