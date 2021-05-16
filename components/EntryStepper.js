import React, { useState } from "react";
import { View, Text } from "react-native";

const EntryStepper = ({ value, max }) => {
  return (
    <View>
      <Text>
        EntryStepper value = {value} = max = {max}
      </Text>
    </View>
  );
};

export default EntryStepper;
