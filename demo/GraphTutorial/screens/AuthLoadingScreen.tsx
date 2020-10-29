//  Copyright (c) Microsoft.
//  Licensed under the MIT license.

// <AuthLoadingScreenSnippet>
// Adapted from https://reactnavigation.org/docs/auth-flow
import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';

export default class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
        <Text style={styles.statusText}>Logging in...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusText: {
    marginTop: 10
  }
});
// </AuthLoadingScreenSnippet>
