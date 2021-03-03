import { GET_PLACES, RESET_DATA, SET_REF } from './types';

import { getCurrentRef, addData, nextRef, prevRef, getMainRef, prepareMainNode, getPlaces } from '../../data/firestore';
import { PLACES_COLLECTION } from '../../data/constants';

export const resetData = () => dispatch => {
    dispatch({ type: RESET_DATA });
};

export const setPlaces = () => async dispatch => {
    getCurrentRef()
        .collection(PLACES_COLLECTION)
        .onSnapshot(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });
            })
            dispatch({
                type: GET_PLACES,
                payload: data
            });
        })
}

export const initMainNode = () => () => {
    prepareMainNode();
};

export const setMainRef = () => dispatch => {
    const ref = getMainRef();
    dispatch({
        type: SET_REF,
        payload: ref
    });
};

export const setRef = name => dispatch => {
    let ref;
    if (name) {
        ref = nextRef(name);
    } else {
        ref = prevRef();
    }
    dispatch({
        type: SET_REF,
        payload: ref
    });
};

export const addPlace = name => () => {
    addData(name);
};

