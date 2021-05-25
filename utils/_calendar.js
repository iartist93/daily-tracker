// utils/_calendar.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMetricDataInfo, timeToString } from './helpers';

export const CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 0;
}

/**
 * Set dummy data for the past 1/2 year in the database and return the result object
 */
function setDummyData() {
  const { run, bike, swim, sleep, eat } = getMetricDataInfo();

  let dummyData = {};
  const timestamp = Date.now();

  for (let i = -183; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = timeToString(time);
    dummyData[strTime] =
      getRandomNumber(3) % 2 === 0
        ? {
            run: getRandomNumber(run.max),
            bike: getRandomNumber(bike.max),
            swim: getRandomNumber(swim.max),
            sleep: getRandomNumber(sleep.max),
            eat: getRandomNumber(eat.max),
          }
        : null;
  }

  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}

/**
 * Not all dates have entries inside the DB, so loop over the
 * past 1/2 year and fill its entry with null
 * @param {*} dates object with all the current entries in the DB
 * @returns modified object will all the missing dates as key and null value
 */
function setMissingDates(dates) {
  const length = Object.keys(dates).length;
  const timestamp = Date.now();

  // loop over 183 previous day
  for (let i = -183; i < 0; i++) {
    // convert day to ms
    const time = timestamp + i * 24 * 60 * 60 * 1000;
    // get day in format '2021-05-24'
    const strTime = timeToString(time);
    // add new entry for this date with null value
    if (typeof dates[strTime] === 'undefined') {
      dates[strTime] = null;
    }
  }

  return dates;
}

/**
 * Get object with all dates <= current date.
 * Or return a dummy data for the past 1/2 year for testing if `result` is null.
 * @param {*} results Current stored `JSON` object in the database
 * @returns Modified object with all dates <= current date
 */
export function formatCalendarResults(results) {
  return results === null ? setDummyData() : setMissingDates(results);
}
