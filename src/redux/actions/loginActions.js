import { ERROR_OCCURED, ERROR_REMOVED } from './types';
import { navigate } from '../../navigation/RootNavigation';
import auth from '@react-native-firebase/auth';

export const signup = ({ email, password }) => (dispatch) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
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
        })
        .then(() => navigate('Home'));
};

export const signin = ({ email, password }) => (dispatch) => {
    auth()
        .signInWithEmailAndPassword(email, password)
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
            console.error(error);
        })
        .then(() => navigate('Home'));
};

export const signout = () => () => {
    auth().signOut();
    navigate('Splash');
}

export const removeErrorMessage = () => (dispatch) => {
    dispatch({ type: ERROR_REMOVED });
}
