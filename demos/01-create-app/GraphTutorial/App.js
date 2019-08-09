// Adapted from https://reactnavigation.org/docs/auth-flow.html
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer } from "react-navigation";

import AuthLoadingScreen from './views/AuthLoadingScreen';
import SignInScreen from './views/SignInScreen';
import HomeScreen from './views/HomeScreen';
import CalendarScreen from './views/CalendarScreen';
import DrawerMenuContent from './menus/DrawerMenu';

const headerOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#276b80'
    },
    headerTintColor: 'white'
  }
};

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  headerOptions
);

const AppDrawer = createDrawerNavigator(
  {
    Home: createStackNavigator({ Home: HomeScreen }, headerOptions),
    Calendar: createStackNavigator({ Calendar: CalendarScreen }, headerOptions),
    'Sign Out': 'SignOut'
  },
  {
    hideStatusBar: false,
    contentComponent: DrawerMenuContent
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawer,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));