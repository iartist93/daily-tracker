import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Centered, Container } from '../styles/styles';
import EntryCard from './EntryCard';

const Timeline = ({ entries }) => {
  console.log('Timeline ', entries);

  return (
    <Container>
      {/* {Object.keys(entries).map((key) => (
        <EntryCard key={key} entryKey={key} entry={entries[key]} />
      ))} */}
      <EntryCard index={0} item={Object.entries(entries)[0]} />
      <FlatList
        data={Object.entries(entries)}
        renderItem={EntryCard}
        keyExtractor={([key, value]) => key}
      />
    </Container>
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
