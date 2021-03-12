import { ITEMS_COLLECTION, MAIN_COLLECTION, PLACES_COLLECTION } from './constants';
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

export const addData = (id, data, TYPE) => {
    if (TYPE === ITEMS_COLLECTION) {
        getMainRef()
            .collection(TYPE)
            .doc(id)                       // TODO: ADD REFRESH REF AFTER SCREEN CHANGE
            .set(data)
    } else {
        getCurrentRef()
            .collection(TYPE)
            .doc(id)
            .set(data);
    }
};

export const removeDataRecursively = async (data, ref) => {
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
            removeDataRecursively(doc.id, ref);
        })
    }
    ref.delete();
};

export const removeData = async (id, TYPE) => {
    await getCurrentRef()
        .collection(TYPE)
        .doc(id)
        .delete();
}
