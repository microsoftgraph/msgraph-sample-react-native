//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default class SignInScreen extends React.Component {
  static contextType = NavigationContext;

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    const navigation = this.context;

    // TEMPORARY
    navigation.reset({
      index: 0,
      routes: [ { name: 'Main' } ]
    });
  };

  render() {
    const navigation = this.context;
    navigation.setOptions({
      title: 'Please sign in',
      headerShown: true
    });

    return (
      <View style={styles.container}>
        <Button title='Sign In' onPress={this._signInAsync}/>
      </View>
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
