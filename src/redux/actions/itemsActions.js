import { ITEMS_COLLECTION } from "../../data/constants";
import { RESET_DATA, SET_ITEMS } from "./types";

import { addData, getCurrentRef } from "../../data/firestore";
import { addPhoto } from '../../data/storage';

export const resetData = () => dispatch => {
    dispatch({ type: RESET_DATA });
};

export const setItems = () => dispatch => {
    const snapshot = getCurrentRef()
        .collection(ITEMS_COLLECTION)
        .onSnapshot(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });
            })
            dispatch({
                type: SET_ITEMS,
                payload: data
            });
        });
    return snapshot;
}

export const addItem = ({ id, data }) => () => {
    addData(id, data, ITEMS_COLLECTION);
    addPhoto(data.fileUri, data.fileName);
}