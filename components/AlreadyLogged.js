import React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";
import { Centered, Row } from "../styles/styles";
import { Fontisto } from "@expo/vector-icons";
import { useFonts, RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono";

const Message = styled.Text`
  font-size: 20px;
  color: black;
  font-family: RobotoMono_500Medium;
  text-align: center;
  margin-top: 30px;
`;

const AlreadyLogged = () => {
  const [fontLoaded] = useFonts({
    RobotoMono_500Medium,
  });

  return (
    <Centered>
      <Fontisto name="smiley" color="black" size={100} />
      <Message> You have already logged data for today! </Message>
    </Centered>
  );
};

export default AlreadyLogged;
