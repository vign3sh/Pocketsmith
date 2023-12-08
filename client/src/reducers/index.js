import { combineReducers } from 'redux';
import auth from './auth';
import bill from './bill';

export default combineReducers({
    auth,
    bill
});