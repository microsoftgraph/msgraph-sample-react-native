// Adapted from https://reactnavigation.org/docs/auth-flow.html
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { AuthManager } from '../auth/AuthManager';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    try {
      await AuthManager.signInAsync();
      this.props.navigation.navigate('App');
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={this._signInAsync}/>
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