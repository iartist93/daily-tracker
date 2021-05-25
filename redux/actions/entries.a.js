import * as API from '../../utils/api';
import { timeToString } from '../../utils/helpers';
import { formatCalendarResults } from '../../utils/_calendar';

//---------------------------------------- Constants

export const RECIEVE_ENTIRES = 'RECIEVE_ENTIRES';
export const ADD_ENTRY = 'ADD_ENTRY ';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

//---------------------------------------- Action Creators

export const recieveEntries = (entries) => ({
  type: RECIEVE_ENTIRES,
  entries,
});

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  entry,
});

export const removeEntry = (key) => ({
  type: REMOVE_ENTRY,
  key,
});

//---------------------------------------- Thunk

//TODO:: Add Progress Bar while saving
/**
 * Save the entry to db, then save it to the current state
 * @param {*} key - formatted date strings
 * @param {*} state - object with the daily tracker valuess
 * @returns
 */
export const handleAddEntry = (key, state) => {
  return async (dispatch) => {
    await API.saveEntry(key, state);
    const entry = { [key]: state };
    dispatch(addEntry(entry));
  };
};

/**
 * Rest the current day entry in both DB and state
 * @param {*} key - formatted date strings
 * @returns
 */
export const handleRemoveEntry = (key) => {
  return async (dispatch) => {
    await API.RemoveData(key);
    dispatch(removeEntry(key));
  };
};

export const handleRecieveEntries = () => {
  return async (dispatch) => {
    const storedEntries = await API.getAllEntries();
    //TODO:: uncomment this
    // const allEntries = formatCalendarResults(storedEntries);
    const allEntries = formatCalendarResults(null);
    dispatch(recieveEntries(allEntries));

    //if there's no entry for today, add a new empty entry
    if (!allEntries[timeToString()]) {
      console.log(
        '-====================> No log for today while recieving data'
      );
      dispatch(addEntry({ [timeToString()]: null }));
    }
  };
};
