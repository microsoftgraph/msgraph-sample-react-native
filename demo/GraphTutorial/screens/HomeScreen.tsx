//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerToggle, headerOptions } from '../menus/HeaderComponents';

const Stack = createStackNavigator();

type HomeScreenState = {
  userLoading: boolean;
  userName: string;
}

export default class HomeScreen extends React.Component {

  HomeComponent = () => (
    <View style={styles.container}>
      <ActivityIndicator animating={this.state.userLoading} size='large' />
      {this.state.userLoading ? null: <Text>Hello {this.state.userName}!</Text>}
    </View>
  );

  state: HomeScreenState = {
    userLoading: true,
    userName: ''
  };

  render() {
    return (
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name='Home'
          component={this.HomeComponent}
          options={{
            title: 'Welcome',
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
