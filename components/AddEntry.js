import React, { useState } from 'react';
import styled from '@emotion/native';
import { connect } from 'react-redux';

import { getMetricDataInfo, timeToString } from '../utils/helpers';
import DateHeader from './DateHeader';
import EntrySlider from './EntrySlider';
import EntryStepper from './EntryStepper';
import { blue, lightPurp } from '../utils/colors';
import { Centered, Row } from '../styles/styles';
import AlreadyLogged from './AlreadyLogged';
import * as API from '../utils/api';
import { handleAddEntry, handleRemoveEntry } from '../redux/actions/entries.a';

//-----------------------------------------------------------------------//
// Styled Components

const Button = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  background-color: ${blue};
  width: 200px;
  padding: 10px;
  border-radius: 2px;
`;

const ButtonText = styled.Text`
  font-family: 'Cochin';
  color: white;
  font-size: 30px;
  font-weight: 900;
`;

//-----------------------------------------------------------------------//
// Helpers

const SubmitButton = ({ onPress }) => {
  return (
    <Button onPress={onPress} underlayColor={lightPurp}>
      <ButtonText>Submit</ButtonText>
    </Button>
  );
};

const initalState = {
  bike: 0,
  run: 0,
  swim: 0,
  eat: 0,
  sleep: 0,
};

//-----------------------------------------------------------------------//
// AddEntry Component

const AddEntry = ({ isAlreadyLogged, dispatch }) => {
  const [metrics, setMetrics] = useState(initalState);

  const increment = (metric) => {
    const { max, step } = getMetricDataInfo(metric);
    const count = metrics[metric] + step;
    setMetrics({ ...metrics, [metric]: count > max ? max : count });
  };

  const decrement = (metric) => {
    const { step } = getMetricDataInfo(metric);
    const count = metrics[metric] - step;
    setMetrics({ ...metrics, [metric]: count <= 0 ? 0 : count });
  };

  const slide = (metric, value) => {
    // sliders will be constrained to (0, max)
    setMetrics({ ...metrics, [metric]: value });
  };

  const resetState = () => {
    setMetrics(initalState);
  };

  const handleSubmit = () => {
    // save data to local stoage
    const key = timeToString();
    console.log(key);
    dispatch(handleAddEntry(key, metrics));
    resetState();
  };

  const handleReset = () => {
    const key = timeToString();
    dispatch(handleRemoveEntry(key));
    resetState();
  };

  const metricMeta = getMetricDataInfo();

  //-----------------------------------------
  return (
    <Centered>
      {!isAlreadyLogged ? (
        <>
          <DateHeader date={new Date().toLocaleDateString()} />
          {Object.keys(metricMeta).map((key) => {
            const { type, getIcon, displayName, ...rest } = metricMeta[key];
            const value = metrics[key];

            return (
              <Row
                alignCenter
                justifySpace
                key={key}
                style={{ marginBottom: 10 }}
              >
                {getIcon()}
                {type === 'slider' ? (
                  <EntrySlider
                    metric={key}
                    value={value}
                    {...rest}
                    onChange={(value) => slide(key, value)}
                  />
                ) : (
                  <EntryStepper
                    value={value}
                    {...rest}
                    onIncrement={() => increment(key)}
                    onDecrement={() => decrement(key)}
                  />
                )}
              </Row>
            );
          })}
          <SubmitButton onPress={handleSubmit} />
          <SubmitButton onPress={handleReset} />
        </>
      ) : (
        <AlreadyLogged onReset={handleReset} />
      )}
    </Centered>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AddEntry);
