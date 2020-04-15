//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

// <AppSnippet>
// Adapted from https://reactnavigation.org/docs/auth-flow
import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignInScreen from './screens/SignInScreen';
import DrawerMenuContent from './menus/DrawerMenu'

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const AuthStackComponent = ({ navigation }: Props) => {
  navigation.setOptions({
    headerShown: false
  });

  return (
    <AuthStack.Navigator initialRouteName='AuthLoading'>
      <AuthStack.Screen name='AuthLoading' component={AuthLoadingScreen} />
      <AuthStack.Screen name='SignIn' component={SignInScreen} />
      <AuthStack.Screen name='Main' component={DrawerMenuContent} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name='AuthStack' component={AuthStackComponent} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
// </AppSnippet>
