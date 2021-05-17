import AsyncStorage from '@react-native-async-storage/async-storage';
import { CALENDAR_STORAGE_KEY } from '../utils/_calendar';

/**
 * Save data to local storage at the caleneder key.
 * @param {*} key - the _formatted_ date.
 * @param {*} value - object to save
 */
export const saveEntry = async (key, value) => {
  try {
    const newData = JSON.stringify({ [key]: value });
    await AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, newData);
  } catch (e) {
    // saving error
    console.log('Error while saving data to local storage!');
  }
};

export const getAllEntries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Error while reading data to local storage!');
  }
};

export const getEntry = async (key) => {
  try {
    const allEntries = await getAllEntries();
    return allEntries[key];
  } catch (e) {
    // error reading value
    console.log(`Error while reading  skey ${key} to local storage!`);
  }
};

export const RemoveData = async (key) => {
  try {
    const allEntries = await getAllEntries();
    allEntries[key] = undefined;
    delete allEntries[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, allEntries);
  } catch (e) {
    console.log(`Error while removing key ${key} from local storage!`);
  }
};
