import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  state = {
    userLoading: true,
    userName: '...'
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.userLoading} />
        <Text>Hello {this.state.userName}!</Text>
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