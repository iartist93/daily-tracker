import React from 'react';
import { StatusBar, View } from 'react-native';
import Constans from 'expo-constants';
import { purple } from '../utils/colors';

const AppStatusBar = (props) => {
  return (
    <View style={{ height: Constans.statusBarHeight }}>
      <StatusBar {...props} />
    </View>
  );
};

export default AppStatusBar;
