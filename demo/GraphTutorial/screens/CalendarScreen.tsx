//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerToggle, headerOptions } from '../menus/HeaderComponents';

const Stack = createStackNavigator();

// Temporary placeholder view
const CalendarComponent = () => (
  <View style={styles.container}>
    <Text>Calendar</Text>
  </View>
);

export default class CalendarScreen extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={ headerOptions }>
        <Stack.Screen name='Calendar'
          component={ CalendarComponent }
          options={{
            title: 'Calendar',
            headerLeft: () => <DrawerToggle/>
          }} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
