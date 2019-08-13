import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GraphManager } from '../graph/GraphManager';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Welcome',
      headerLeft: <Icon iconStyle={{ marginLeft: 10, color: 'white' }} size={30} name="menu" onPress={navigation.toggleDrawer} />
    };
  }

  state = {
    userLoading: true,
    userName: ''
  };

  async componentDidMount() {
    try {
      // Get the signed-in user from Graph
      const user = await GraphManager.getUserAsync();
      // Set the user name to the user's given name
      this.setState({userName: user.givenName, userLoading: false});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.userLoading} size='large' />
        {this.state.userLoading ? null: <Text>Hello {this.state.userName}!</Text>}
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