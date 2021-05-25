import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from '@emotion/native';
import { getMetricDataInfo, timeToString } from '../utils/helpers';
import { Row, Card, DateHeader } from '../styles/styles';
import EmptyCard from './EmptyCard';

const MetricName = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: black;
`;
const MetricValue = styled.Text`
  font-size: 16px;
`;

const metricsInfo = getMetricDataInfo();

const EntryCard = ({ index, item }) => {
  const [key, value] = item;

  return (
    <>
      {!value ? (
        <EmptyCard entryDate={key} />
      ) : (
        <Card style={styles.shadow}>
          <View key={key}>
            <DateHeader>{key}</DateHeader>
            {Object.keys(metricsInfo).map((metric) => {
              const metricInfo = metricsInfo[metric];
              return (
                <Row alignCenter key={metric} style={{ marginBottom: 8 }}>
                  {metricInfo.getIcon(40)}
                  <View style={{ alignItems: 'flex-start' }}>
                    <MetricName>{metricInfo.displayName}</MetricName>
                    <MetricValue>
                      {value[metric]} {metricInfo.unit}
                    </MetricValue>
                  </View>
                </Row>
              );
            })}
          </View>
        </Card>
      )}
    </>
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

export default EntryCard;
