import React from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Welcome',
      headerLeft: <Button title="Menu" onPress={navigation.toggleDrawer}/>
    };
  }

  state = {
    userLoading: true,
    userName: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.userLoading} size='large' />
        {this.state.userLoading? null: <Text>Hello {this.state.userName}!</Text>}
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