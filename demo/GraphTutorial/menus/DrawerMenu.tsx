//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

import React, { FC } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps
} from '@react-navigation/drawer';
import { NavigationContext } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';

const Drawer = createDrawerNavigator();

type CustomDrawerContentProps = DrawerContentComponentProps & {
  userName: string;
  userEmail: string;
  userPhoto: ImageSourcePropType;
  signOut: () => void;
}

type DrawerMenuState = {
  userName: string;
  userEmail: string;
  userPhoto: ImageSourcePropType;
}

const CustomDrawerContent: FC<CustomDrawerContentProps> = props => (
  <DrawerContentScrollView {...props}>
      <View style={styles.profileView}>
        <Image source={props.userPhoto}
          resizeMode='contain'
          style={styles.profilePhoto} />
        <Text style={styles.profileUserName}>{props.userName}</Text>
        <Text style={styles.profileEmail}>{props.userEmail}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Sign Out' onPress={props.signOut}/>
  </DrawerContentScrollView>
);

export default class DrawerMenuContent extends React.Component {
  static contextType = NavigationContext;

  state: DrawerMenuState = {
    // TEMPORARY
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../images/no-profile-pic.png')
  }

  _signOut = () => {
    const navigation = this.context;
    // Sign out
    // TEMPORARY
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }]
    });
  }

  render() {
    const navigation = this.context;
    navigation.setOptions({
      headerShown: false,
    });

    return (
      <Drawer.Navigator
        drawerType='front'
        drawerContent={props => (
          <CustomDrawerContent {...props}
            userName={this.state.userName}
            userEmail={this.state.userEmail}
            userPhoto={this.state.userPhoto}
            signOut={this._signOut} />
        )}>
        <Drawer.Screen name='Home'
          component={HomeScreen}
          options={{drawerLabel: 'Home'}} />
        <Drawer.Screen name='Calendar'
          component={CalendarScreen}
          options={{drawerLabel: 'Calendar'}} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileView: {
    alignItems: 'center',
    padding: 10
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileUserName: {
    fontWeight: '700'
  },
  profileEmail: {
    fontWeight: '200',
    fontSize: 10
  }
});
