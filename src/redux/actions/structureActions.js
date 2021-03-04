import { RESET_DATA, SET_REF } from './types';

import { getCurrentRef, addData, nextRef, prevRef, getMainRef, prepareMainNode, removeData } from '../../data/firestore';
import { PLACES_COLLECTION } from '../../data/constants';

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

export const setData = TYPE => dispatch => {
    const snapshot = getCurrentRef()
        .collection(PLACES_COLLECTION)
        .onSnapshot(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });
            })
            dispatch({
                type: TYPE,
                payload: data
            });
        });
    return snapshot;
}

export const setRef = (name, setData, TYPE) => dispatch => {
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
    setData(TYPE);
};

export const addPlace = name => () => {
    addData(name);
};

export const removePlace = name => () => {
    removeData(name, null);
};
