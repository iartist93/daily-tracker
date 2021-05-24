import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Centered, Row } from '../styles/styles';
import styled, { css } from '@emotion/native';
import { blue, lightPurp } from '../utils/colors';

import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono';

const Button = styled.TouchableHighlight`
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${blue};
  margin: 0 10px;
  padding: 10px;
  border-radius: 8px;
`;

const InfoContainer = styled.View`
  width: 120px;
  margin: 0 10px;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 10px;
`;

const InfoText = styled.Text`
  font-size: 20px;
  font-family: RobotoMono_400Regular;
  color: black;
`;

const EntryStepper = ({ value, unit, onIncrement, onDecrement }) => {
  const [fontLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
  });

  return (
    <>
      {fontLoaded && (
        <Row alignCenter fullwidth justifySpace>
          <Row>
            <Button onPress={onDecrement} underlayColor={lightPurp}>
              <FontAwesome name='minus' color='white' size={30} />
            </Button>
            <Button onPress={onIncrement} underlayColor={lightPurp}>
              <FontAwesome name='plus' color='white' size={30} />
            </Button>
          </Row>
          <InfoContainer>
            <InfoText style={{ fontFamily: 'RobotoMono_700Bold' }}>
              {value}
            </InfoText>
            <InfoText>{unit}</InfoText>
          </InfoContainer>
        </Row>
      )}
    </>
  );
};

export default EntryStepper;
