// Copyright (c) Microsoft.
// Licensed under the MIT license.

// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthContext } from '../AuthContext';

type SignInProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

export default class SignInScreen extends React.Component<SignInProps> {
  static contextType = AuthContext;

  _signInAsync = async () => {
    await this.context.signIn();
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Please sign in',
      headerShown: true
    });
  }

  render() {
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
