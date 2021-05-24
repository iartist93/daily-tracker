import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import styled from '@emotion/native';
import { Centered, Row } from '../styles/styles';
import { Fontisto } from '@expo/vector-icons';
import { useFonts, RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';
import { purple, lightPurp } from '../utils/colors';

const Message = styled.Text`
  font-size: 20px;
  color: black;
  font-family: RobotoMono_500Medium;
  text-align: center;
  margin-top: 30px;
`;

const TextButton = styled.TouchableHighlight`
  margin-top: 20px;
`;

const AlreadyLogged = ({ onReset }) => {
  const [fontLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  return (
    <Centered>
      <Fontisto name='smiley' color='black' size={100} />
      <Message> You have already logged data for today! </Message>
      <TextButton onPress={onReset} underlayColor={lightPurp}>
        <Text style={{ color: purple, fontSize: 25 }}>Reset</Text>
      </TextButton>
    </Centered>
  );
};

export default AlreadyLogged;
