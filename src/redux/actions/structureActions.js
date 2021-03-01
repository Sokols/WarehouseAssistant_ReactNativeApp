import { ADD_PLACE, GET_PLACES } from './types';
import { navigate } from '../../navigation/RootNavigation';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getPlaces = () => async (dispatch) => {
    const { email } = auth().currentUser;
    const snapshot = await firestore()
        .collection('warehouses')
        .doc(email)
        .collection('places')
        .get();

    const items = [];
    snapshot.forEach(doc => {
        items.push(doc.data());
    });

    dispatch({
        type: GET_PLACES,
        payload: items
    });
};

export const addPlace = () => () => {
    navigate('Home');
};

