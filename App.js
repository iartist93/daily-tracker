import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';
import History from './components/History';
import store from './redux/store.s';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { blue, purple } from './utils/colors';
import { handleRecieveEntries } from './redux/actions/entries.a';

//------------------------------------------------------
export default function App() {
  const Tab = createBottomTabNavigator();
  const AddNewRoute = () => <AddEntry />;
  const HistoryRoute = () => <History />;

  useEffect(() => {
    // load data from db and save it in the store
    store.dispatch(handleRecieveEntries());
  }, []);

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
                activeTintColor: blue,
                inactiveTintColor: 'black',
              }}
            >
              <Tab.Screen
                name='AddNew'
                component={AddNewRoute}
                options={{
                  title: 'Add New',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons
                      name='home'
                      size={30}
                      color={blue}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name='History'
                component={HistoryRoute}
                options={{
                  title: 'Timeline',
                  tabBarIcon: () => (
                    <MaterialCommunityIcons
                      name='post'
                      size={30}
                      color='#464649'
                    />
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
