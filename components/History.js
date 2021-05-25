import React from 'react';
import { connect } from 'react-redux';
import Timeline from './Timeline';
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars';
import { timeToString } from '../utils/helpers';
import { updateCurrentDate } from '../redux/actions/currentDate.a';

const History = ({ dispatch }) => {
  const handleDayChange = (day) => {
    dispatch(updateCurrentDate(day));
  };

  return (
    <CalendarProvider
      date={timeToString()}
      style={{ marginBottom: 150, zIndex: 100 }}
      onDateChanged={handleDayChange}
    >
      <ExpandableCalendar
        firstDay={1}
        // disablePan={true} //we need this
        // disableWeekScroll={true}
      />
      <Timeline />
    </CalendarProvider>
  );
};

export default connect()(History);
