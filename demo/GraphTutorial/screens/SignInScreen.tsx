//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import { AuthManager } from '../auth/AuthManager';

export default class SignInScreen extends React.Component {
  static contextType = NavigationContext;

  static navigationOptions = {
    title: 'Please sign in',
  };

  // <SignInAsyncSnippet>
  _signInAsync = async () => {
    const navigation = this.context;

    try {
      await AuthManager.signInAsync();

      navigation.reset({
        index: 0,
        routes: [ { name: 'Main' } ]
      });
    } catch (error) {
      Alert.alert(
        'Error signing in',
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
  // </SignInAsyncSnippet>

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
