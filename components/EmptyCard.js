import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from '@emotion/native';
import { timeToString } from '../utils/helpers';
import { Card, DateHeader } from '../styles/styles';
import { connect } from 'react-redux';

const EmptyCard = ({ currentDate }) => {
  return (
    <Card style={styles.shadow}>
      <DateHeader>{currentDate}</DateHeader>
      <View>
        {timeToString() === currentDate ? (
          <Text>👋 Don't forget to add entry for today!</Text>
        ) : (
          <Text>🎮 You don't have any log for that day!</Text>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#84878A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

const mapState = ({ currentDate }, { entryDate }) => ({
  currentDate: entryDate ? entryDate : currentDate,
});

export default connect(mapState)(EmptyCard);
