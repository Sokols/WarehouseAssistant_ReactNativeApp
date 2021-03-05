import { combineReducers } from 'redux';
import login from './loginReducer';
import structure from './structureReducer';
import items from './itemsReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
    login,
    structure,
    items
});

export loginReducer from './loginReducer';
export structureReducer from './structureReducer';
export itemsReducer from './itemsReducer';
