import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Centered, Container } from '../styles/styles';
import EntryCard from './EntryCard';
import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarProvider,
  ExpandableCalendar,
} from 'react-native-calendars';
import { timeToString } from '../utils/helpers';

const KNOB_CONTAINER_HEIGHT = 0; //normally its 20

const Timeline = ({ entries }) => {
  console.log('Timeline ', entries);

  const handleDayChange = (day) => {
    console.log('selected day', day);
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
      <View>
        <EntryCard index={0} item={Object.entries(entries)[0]} />
        <FlatList
          data={Object.entries(entries)}
          renderItem={EntryCard}
          keyExtractor={([key, value]) => key}
        />
      </View>
    </CalendarProvider>
  );
};

const mapStateToProps = (state) => ({
  entries: state.entries,
});

export default connect(mapStateToProps)(Timeline);

const test = {
  '2021-05-23': { bike: 0, eat: 0, run: 0, sleep: 0, swim: 0 },
  '2021-05-23': { bike: 0, eat: 0, run: 0, sleep: 0, swim: 0 },
};
