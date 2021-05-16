// utils/helpers.js

import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View } from "react-native";

export function isBetween(num, x, y) {
  if (num >= x && num <= y) {
    return true;
  }

  return false;
}

export function calculateDirection(heading) {
  let direction = "";

  if (isBetween(heading, 0, 22.5)) {
    direction = "North";
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = "North East";
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = "East";
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = "South East";
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = "South";
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = "South West";
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = "West";
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = "North West";
  } else if (isBetween(heading, 337.5, 360)) {
    direction = "North";
  } else {
    direction = "Calculating";
  }

  return direction;
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split("T")[0];
}

/**
 * Default config for each metric
 * @param {*} metric _optional_ [run - bike - swim - eat - sleep]
 * @returns metric config object if provided else whole info object
 */
export const getMetricDataInfo = (metric) => {
  const info = {
    bike: {
      displayName: "Bike",
      max: 50,
      unit: "miles",
      step: 1,
      type: "stepper",
      getIcon: () => {
        <View>
          <MaterialIcons name="directions-bike" color="black" size={35} />
        </View>;
      },
    },
    run: {
      displayName: "Run",
      max: 100,
      unit: "miles",
      step: 1,
      type: "stepper",
      getIcon: () => {
        <View>
          <MaterialIcons name="directions-run" color="black" size={35} />
        </View>;
      },
    },
    swim: {
      displayName: "Swim",
      max: 9900,
      unit: "meters",
      step: 100,
      type: "stepper",
      getIcon: () => {
        <View>
          <MaterialCommunityIcons name="swim" color="black" size={35} />
        </View>;
      },
    },
    eat: {
      displayName: "Eat",
      max: 10,
      unit: "rating",
      step: 1,
      type: "slider",
      getIcon: () => {
        <View>
          <MaterialCommunityIcons name="food" color="black" size={35} />
        </View>;
      },
    },
    sleep: {
      displayName: "Sleep",
      max: 24,
      unit: "hours",
      step: 1,
      type: "slider",
      getIcon: () => {
        <View>
          <MaterialCommunityIcons name="sleep" color="black" size={35} />
        </View>;
      },
    },
  };
  return metric ? info[metric] : info;
};
