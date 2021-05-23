import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { getMetricDataInfo } from '../utils/helpers';
import { Row } from '../styles/styles';
import { purple } from '../utils/colors';

const Card = styled.View`
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`;

const Date = styled.Text`
  font-size: 26px;
  font-weight: 900;
  color: black;
  margin-bottom: 15px;
  color: ${purple};
`;

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
  const [key, values] = item;
  return (
    <Card style={styles.shadow}>
      <Date>{key}</Date>
      {Object.keys(metricsInfo).map((metric) => {
        const metricInfo = metricsInfo[metric];
        return (
          <Row alignCenter key={metric} style={{ marginBottom: 8 }}>
            {metricInfo.getIcon(40)}
            <View style={{ alignItems: 'flex-start' }}>
              <MetricName>{metricInfo.displayName}</MetricName>
              <MetricValue>
                {values[metric]} {metricInfo.unit}
              </MetricValue>
            </View>
          </Row>
        );
      })}
    </Card>
  );
};

export default EntryCard;

//NOTE:: can't use box shadow with @emotion
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
