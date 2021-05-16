import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { getMetricDataInfo } from "../utils/helpers";
import DateHeader from "./DateHeader";
import EntrySlider from "./EntrySlider";
import EntryStepper from "./EntryStepper";
import styled, { css } from "@emotion/native";
import { blue, white, lightPurp, purple } from "../utils/colors";
import { Row } from "../styles/styles";

const Button = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  background-color: ${blue};
  width: 200px;
  padding: 10px;
  border-radius: 2px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 30px;
`;

const SubmitButton = ({ onPress }) => {
  return (
    <Button onPress={onPress} underlayColor={lightPurp}>
      <ButtonText>Submit</ButtonText>
    </Button>
  );
};

const AddEntry = () => {
  const [metrics, setMetrics] = useState({
    bike: 0,
    run: 0,
    swim: 0,
    eat: 0,
    sleep: 0,
  });

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

  const submit = () => {
    console.log("Pressed");
  };

  const metricMeta = getMetricDataInfo();

  return (
    <View>
      <DateHeader date={new Date().toLocaleDateString()} />
      {Object.keys(metricMeta).map((key) => {
        const { type, getIcon, displayName, ...rest } = metricMeta[key];
        const value = metrics[key];

        return (
          <Row centered key={key}>
            {/* <Text>{displayName}</Text> */}
            {getIcon()}
            {type === "slider" ? (
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
      <SubmitButton onPress={submit} />
    </View>
  );
};

export default AddEntry;
