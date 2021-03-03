import { MAIN_COLLECTION, PLACES_COLLECTION } from './constants';
import store from '../redux/store/index';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const prepareMainNode = () => {
    const { email } = auth().currentUser;
    const nodeRef = getMainRef();
    nodeRef.set({
        name: email.split('@')[0] + '\'s warehouse'
    });
    nodeRef.collection(PLACES_COLLECTION).doc('A').set({ info: '' });
}

export const getMainRef = () => {
    const { email } = auth().currentUser;
    return firestore()
        .collection(MAIN_COLLECTION)
        .doc(email);
}

export const getCurrentRef = () => {
    const { ref } = store.getState().structure;
    return ref;
}

export const nextRef = name => {
    return getCurrentRef()
        .collection(PLACES_COLLECTION)
        .doc(name);
};

export const prevRef = () => {

};

export const getPlaces = async () => {
    const snapshot = getCurrentRef()
        .collection(PLACES_COLLECTION)
        .get();

    // snapshot.forEach(doc => {
    //     data.push({ id: doc.id, ...doc.data() });
    // })
    return data;
}

export const addData = data => {
    getCurrentRef()
        .collection(PLACES_COLLECTION)
        .doc(data)
        .set({ info: '' });
}

