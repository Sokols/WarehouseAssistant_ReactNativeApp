import { ITEMS_COLLECTION } from "../../data/constants";
import { RESET_DATA, SET_ITEMS } from "./types";

import { addData, getCurrentRef } from "../../data/firestore";
import { addPhoto, removePhoto } from '../../data/storage';

import { removeData } from '../../data/firestore';

export const resetData = () => dispatch => {
    dispatch({ type: RESET_DATA });
};

export const setItems = () => dispatch => {
    const snapshot = getCurrentRef()
        .collection(ITEMS_COLLECTION)
        .orderBy('name');
    setPlacesToDispatch(snapshot, dispatch);
}

export const setItemsBySearch = search => dispatch => {
    const snapshot = getCurrentRef()
        .collection(ITEMS_COLLECTION)
        .orderBy('name')
        .startAt(search)
        .endAt(search + "\uf8ff");
    setPlacesToDispatch(snapshot, dispatch);
};

export const addItem = ({ id, data }) => () => {
    addData(id, data, ITEMS_COLLECTION);
    addPhoto(data.fileUri, data.fileName);
}

export const removeItem = (item) => () => {
    const { id } = item;
    removeData(id, ITEMS_COLLECTION);
    removePhoto(item.fileName);
};

const setPlacesToDispatch = (ref, dispatch) => {
    ref.onSnapshot(querySnapshot => {
        let data = [];
        querySnapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        })
        dispatch({
            type: SET_ITEMS,
            payload: data
        });
    });
};