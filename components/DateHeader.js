import React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";
import { Centered, Row } from "../styles/styles";
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

const Date = styled.Text`
  font-size: 30px;
  color: black;
  font-family: RobotoMono_500Medium;
`;

const DateHeader = ({ date }) => {
  const [fontLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
  });

  return (
    <Row>
      <Row fullwidth centered>
        <Date> {date} </Date>
      </Row>
    </Row>
  );
};

export default DateHeader;
