import { combineReducers } from 'redux';
import entries from './entries.r';
import currentDate from './currentDate.r';

const reducers = combineReducers({ entries, currentDate });

export default reducers;
