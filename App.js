import React from 'react';
import { StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import store from './redux/store.s';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { blue } from './utils/colors';
import Timeline from './components/Timeline';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();

  const AddNewRoute = () => <AddEntry isAlreadyLogged={false} />;
  const TimelineRoute = () => <Timeline />;

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar
              animated={true}
              backgroundColor={blue}
              barStyle='dark-content'
            />
            <Tab.Navigator
              tabBarOptions={{
                labelStyle: {
                  fontSize: 15,
                },
                activeTintColor: 'blue',
                inactiveTintColor: 'red',
              }}
            >
              <Tab.Screen
                name='Home'
                component={AddNewRoute}
                options={{
                  title: 'Add New',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons
                      name='home'
                      size={30}
                      color='blue'
                    />
                  ),
                }}
              />
              <Tab.Screen
                name='Settings'
                component={TimelineRoute}
                options={{
                  title: 'Timeline',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name='post' size={30} color='red' />
                  ),
                }}
              />
            </Tab.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});
