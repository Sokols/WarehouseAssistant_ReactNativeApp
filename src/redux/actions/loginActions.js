import { SIGNOUT, SIGNIN, ERROR_OCCURED, ERROR_REMOVED } from './types';
import api from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../navigationRef';

export const signup = ({ email, password }) => async (dispatch)  => {
    try {
        const response = await api.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: SIGNIN, payload: response.data.token });
        navigate('Home');
    } catch (error) {
        dispatch({
            type: ERROR_OCCURED,
            payload: 'Something went wrong with sign up.'
        });
    }
};

export const signin = ({ email, password }) => async (dispatch) => {
    try {
        const response = await api.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: SIGNIN, payload: response.data.token });
        navigate('Home');
    } catch (error) {
        dispatch({
            type: ERROR_OCCURED,
            payload: 'Something went wrong with sign in.'
        });
    }
};

export const signout = () => async (dispatch) => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: SIGNOUT });
    navigate('Signin');
}

export const removeErrorMessage = () => (dispatch) => {
    dispatch({ type: ERROR_REMOVED });
}

export const tryLocalSignin = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: SIGNIN, payload: token });
        navigate('Main');
    } else {
        navigate('Signin');
    }
}