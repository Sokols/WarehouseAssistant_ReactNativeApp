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
    return getCurrentRef()
        .parent
        .parent;
};

export const addData = data => {
    getCurrentRef()
        .collection(PLACES_COLLECTION)
        .doc(data)
        .set({ info: '' });
};

export const removeData = async (data, ref) => {
    if (!ref) {
        ref = getCurrentRef();
    }
    ref = ref
        .collection(PLACES_COLLECTION)
        .doc(data);
    const snapshot = await ref
        .collection(PLACES_COLLECTION)
        .get();
    if (!snapshot.empty) {
        snapshot.forEach(doc => {
            // RECURSIVE DOC REMOVING
            console.log(doc.id + " remove!")
            removeData(doc.id, ref);
        })
    }
    ref.delete();
};
