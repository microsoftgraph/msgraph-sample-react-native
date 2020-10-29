//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

import React, { FC } from 'react';
import {
  Alert,
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
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthContext } from '../AuthContext';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import { GraphManager } from '../graph/GraphManager';

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

type DrawerMenuProps = {
  navigation: StackNavigationProp<ParamListBase>;
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

export default class DrawerMenuContent extends React.Component<DrawerMenuProps, DrawerMenuState> {
  static contextType = AuthContext;

  state: DrawerMenuState = {
    // TEMPORARY
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../images/no-profile-pic.png')
  }

  _signOut = async () => {
    this.context.signOut();
  }

  // <ComponentDidMountSnippet>
  async componentDidMount() {
    this.props.navigation.setOptions({
      headerShown: false,
    });

    try {
      // Get the signed-in user from Graph
      const user = await GraphManager.getUserAsync();

      // Update UI with display name and email
      this.setState({
        userName: user.displayName,
        // Work/School accounts have email address in mail attribute
        // Personal accounts have it in userPrincipalName
        userEmail: user.mail !== null ? user.mail : user.userPrincipalName,
      });
    } catch(error) {
      Alert.alert(
        'Error getting user',
        JSON.stringify(error),
        [
          {
            text: 'OK'
          }
        ],
        { cancelable: false }
      );
    }
  }
  // </ComponentDidMountSnippet>

  render() {
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
