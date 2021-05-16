import React, { useEffect } from "react";
import { Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Centered, Row } from "../styles/styles";

const EntrySlider = ({ value, step, metric, unit, max, onChange }) => {
  console.log("rendererd ", metric);

  useEffect(() => {
    console.log("mounted!");
  }, []);

  return (
    <Row centered fullwidth>
      <Slider
        value={value}
        step={step}
        minimumValue={0}
        maximumValue={max}
        onValueChange={(val) => onChange(val)}
        style={{ flex: 1, height: 50 }}
      />
      <Centered>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </Centered>
    </Row>
  );
};

export default EntrySlider;
