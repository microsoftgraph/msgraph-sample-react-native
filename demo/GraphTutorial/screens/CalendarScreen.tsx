//  Copyright (c) Microsoft. All rights reserved.
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

export default class CalendarScreen extends React.Component {

  CalendarComponent = () => (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );

  // Temporary placeholder view
  render() {
    return (
      <Stack.Navigator screenOptions={ headerOptions }>
        <Stack.Screen name='Calendar'
          component={ this.CalendarComponent }
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
