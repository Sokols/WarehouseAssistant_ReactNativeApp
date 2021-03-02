import { combineReducers } from 'redux';
import login from './loginReducer';
import structure from './structureReducer';

export default combineReducers({
    login,
    structure
});

export loginReducer from './loginReducer';
export structureReducer from './structureReducer';
