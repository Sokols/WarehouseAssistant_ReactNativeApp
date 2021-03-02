import { ERROR_OCCURED, ERROR_REMOVED } from './types';
import { navigate } from '../../navigation/RootNavigation';
import auth from '@react-native-firebase/auth';
import { setNodeDoc } from '../../data/firestore';

export const signup = ({ email, password }) => (dispatch) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            navigate('Home')
            setNodeDoc(email);
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                dispatch({
                    type: ERROR_OCCURED,
                    payload: 'That email address is already in use!'
                });
            }

            if (error.code === 'auth/invalid-email') {
                dispatch({
                    type: ERROR_OCCURED,
                    payload: 'That email address is invalid!'
                });
            }
            console.error(error);
        });
};

export const signin = ({ email, password }) => (dispatch) => {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigate('Home'))
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                dispatch({
                    type: ERROR_OCCURED,
                    payload: 'User not found!'
                });
            }

            if (error.code === 'auth/wrong-password') {
                dispatch({
                    type: ERROR_OCCURED,
                    payload: 'Wrong password!'
                });
            }

            if (error.code === 'auth/invalid-email') {
                dispatch({
                    type: ERROR_OCCURED,
                    payload: 'That email address is invalid!'
                });
            }
            console.error(error);
        });
};

export const signout = () => () => {
    auth().signOut();
    navigate('Splash');
}

export const removeErrorMessage = () => (dispatch) => {
    dispatch({ type: ERROR_REMOVED });
}

export const completeAllFields = () => (dispatch) => {
    dispatch({
        type: ERROR_OCCURED,
        payload: 'Complete all fields!'
    });
}
