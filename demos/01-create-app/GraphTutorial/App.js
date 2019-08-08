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

const AuthStack = createStackNavigator({
  SignIn: SignInScreen
});

const AppDrawer = createDrawerNavigator(
  {
    Home: createStackNavigator({ Home: HomeScreen }),
    Calendar: createStackNavigator({ Calendar: CalendarScreen })
  },
  {
    hideStatusBar: false,
    contentComponent: DrawerMenuContent
  }
);

const AppStack = createStackNavigator(
  {
    App: AppDrawer
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