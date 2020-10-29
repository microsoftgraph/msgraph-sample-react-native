//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

import React from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerToggle, headerOptions } from '../menus/HeaderComponents';

const Stack = createStackNavigator();
const UserState = React.createContext({userLoading: true, userName: ''});

type HomeScreenState = {
  userLoading: boolean;
  userName: string;
}

const HomeComponent = () => {
  const userState = React.useContext(UserState);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={userState.userLoading} size='large' />
      {userState.userLoading ? null: <Text>Hello {userState.userName}!</Text>}
    </View>
  );
}

export default class HomeScreen extends React.Component {

  state: HomeScreenState = {
    userLoading: true,
    userName: ''
  };

  render() {
    return (
      <UserState.Provider value={this.state}>
          <Stack.Navigator screenOptions={headerOptions}>
            <Stack.Screen name='Home'
              component={HomeComponent}
              options={{
                title: 'Welcome',
                headerLeft: () => <DrawerToggle/>
              }} />
          </Stack.Navigator>
      </UserState.Provider>
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
