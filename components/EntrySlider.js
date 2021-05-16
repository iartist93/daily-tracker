import React, { useEffect } from "react";
import Slider from "@react-native-community/slider";
import { Centered, Row } from "../styles/styles";
import styled, { css } from "@emotion/native";

import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

const InfoContainer = styled.View`
  width: 120px;
  margin: 0 10px;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 10px;
`;

const InfoText = styled.Text`
  font-size: 25px;
  font-family: RobotoMono_400Regular;
  color: black;
`;

const EntrySlider = ({ value, step, metric, unit, max, onChange }) => {
  const [fontLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
  });

  useEffect(() => {
    console.log("mounted!");
  }, []);

  return (
    <Row centered fullwidth spaced>
      <Slider
        value={value}
        step={step}
        minimumValue={0}
        maximumValue={max}
        onValueChange={(val) => onChange(val)}
        style={{ flex: 1 }}
      />
      <InfoContainer>
        <InfoText style={{ fontFamily: "RobotoMono_700Bold" }}>
          {value}
        </InfoText>
        <InfoText>{unit}</InfoText>
      </InfoContainer>
    </Row>
  );
};

export default EntrySlider;
