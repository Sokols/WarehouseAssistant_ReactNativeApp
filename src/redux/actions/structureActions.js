import { RESET_DATA, SET_PLACES, SET_REF } from './types';
import { PLACES_COLLECTION } from '../../data/constants';

import { getCurrentRef, addData, nextRef, prevRef, getMainRef, prepareMainNode, removeDataRecursively } from '../../data/firestore';
import { createCodeFromId } from '../../utils/converters';

export const resetData = () => dispatch => {
    dispatch({ type: RESET_DATA });
};

export const initMainNode = () => () => {
    prepareMainNode();
};

export const setMainRef = () => dispatch => {
    const ref = getMainRef();
    dispatch({
        type: SET_REF,
        payload: { ref, refLevel: 0 }
    });
};

export const setRef = (name, setData) => dispatch => {
    let ref;
    let refLevel = 0;
    if (name) {
        ref = nextRef(name);
        refLevel++;
    } else {
        ref = prevRef();
        refLevel--;
    }
    dispatch({
        type: SET_REF,
        payload: { ref, refLevel }
    });
    setData(SET_PLACES);
};

export const setPlaces = () => dispatch => {
    const snapshot = getCurrentRef()
        .collection(PLACES_COLLECTION)
        .onSnapshot(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });
            })
            dispatch({
                type: SET_PLACES,
                payload: data
            });
        });
    return snapshot;
};

export const addPlace = id => () => {
    addData(createCodeFromId(id + 1), {}, PLACES_COLLECTION);
};

export const removePlace = id => () => {
    removeDataRecursively(createCodeFromId(id), null);
};
