import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import EmptyCard from './EmptyCard';
import EntryCard from './EntryCard';
import { timeStringToInteger } from '../utils/helpers';

const Timeline = ({ entries }) => {
  return (
    <View>
      {Object.keys(entries).length === 0 ? (
        <EmptyCard />
      ) : (
        <FlatList
          data={Object.entries(entries)}
          renderItem={(props) => <EntryCard {...props} />}
          keyExtractor={([key]) => key}
        />
      )}
    </View>
  );
};

const mapState = (state) => {
  const { entries, currentDate } = state;
  const latestEntries = Object.fromEntries(
    Object.entries(entries).filter(
      ([key, _]) => timeStringToInteger(key) >= timeStringToInteger(currentDate)
    )
  );
  return {
    entries: latestEntries,
    currentDate,
  };
};

export default connect(mapState)(Timeline);
