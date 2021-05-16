import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const EntrySlider = ({ value, step, max, onChange }) => {
  return (
    <View>
      <Slider
        value={value}
        step={step}
        minimumValue={0}
        maximumValue={max}
        onValueChange={(value) => onChange(value)}
      />
      <Text>
        Slider value = {value} - max = {max}
      </Text>
    </View>
  );
};

export default EntrySlider;
