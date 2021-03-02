import { MAIN_COLLECTION } from './constants';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const setNodeDoc = () => {
    const { email } = auth().currentUser;
    ref().set({
        name: email.split('@')[0] + '\'s warehouse',
        places: []
    });
}

export const getData = (dispatch, GET_PLACES) => {
    ref().onSnapshot(querySnapshot => {
        dispatch({
            type: GET_PLACES,
            payload: querySnapshot.data().places
        });
    });
}

export const addData = (data) => {
    ref().update({
        places: firestore.FieldValue.arrayUnion({ _id: data, places: [] })
    })
}

const ref = () => {
    const { email } = auth().currentUser;
    return firestore()
        .collection(MAIN_COLLECTION)
        .doc(email);
}