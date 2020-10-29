//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

// <AppSnippet>
// Adapted from https://reactnavigation.org/docs/auth-flow
import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import { AuthContext } from './AuthContext';
import SignInScreen from './screens/SignInScreen';
import DrawerMenuContent from './menus/DrawerMenu'
import AuthLoadingScreen from './screens/AuthLoadingScreen';

const Stack = createStackNavigator();

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

export default function App({ navigation }: Props) {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null
          }
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null;
      // TEMPORARY
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        dispatch({ type: 'SIGN_IN', token: 'placeholder-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' })
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen name="Loading" component={AuthLoadingScreen} />
          ) : state.userToken == null ? (
            <Stack.Screen name="SignIn" component={SignInScreen} />
          ) : (
            <Stack.Screen name="Main" component={DrawerMenuContent} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
// </AppSnippet>
