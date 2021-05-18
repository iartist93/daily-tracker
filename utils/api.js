import AsyncStorage from '@react-native-async-storage/async-storage';
import { CALENDAR_STORAGE_KEY } from '../utils/_calendar';

/**
 * Save data to local storage at the caleneder key.
 * @param {*} key - the _formatted_ date.
 * @param {*} value - object to save
 */
export const saveEntry = async (key, value) => {
  const entry = { [key]: value };
  const newData = JSON.stringify(entry);
  try {
    await AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, newData);
  } catch (e) {
    console.error(
      'Error while saving data to local storage!\n',
      newData,
      '\n',
      e
    );
  }
};

export const getAllEntries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
    return jsonValue != null ? await JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error('Error while all entries data from local storage! ', e);
  }
};

export const getEntry = async (key) => {
  try {
    const allEntries = await getAllEntries();
    return allEntries[key];
  } catch (e) {
    // error reading value
    console.error(`Error while reading  skey ${key} to local storage! `, e);
  }
};

export const RemoveData = async (key) => {
  try {
    const allEntries = await getAllEntries();
    allEntries[key] = undefined;
    delete allEntries[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(allEntries));
  } catch (e) {
    console.error(`Error while removing key ${key} from local storage! `, e);
  }
};
