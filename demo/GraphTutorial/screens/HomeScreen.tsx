//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

// <HomeScreenSnippet>
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerToggle, headerOptions } from '../menus/HeaderComponents';
import { UserContext } from '../UserContext';

const Stack = createStackNavigator();

const HomeComponent = () => {
  const userContext = React.useContext(UserContext);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={userContext.userLoading} size='large' />
      {userContext.userLoading ? null: <Text>Hello {userContext.userFirstName}!</Text>}
    </View>
  );
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name='Home'
          component={HomeComponent}
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
// </HomeScreenSnippet>
