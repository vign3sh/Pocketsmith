import { combineReducers } from 'redux';
import auth from './auth';
import friends from './friends';
import groups from './groups';

export default combineReducers({
    auth,
    friends,
    groups
});