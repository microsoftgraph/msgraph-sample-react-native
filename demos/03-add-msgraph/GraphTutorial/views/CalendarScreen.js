import React from 'react';
import {
  ActivityIndicator,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GraphManager } from '../graph/GraphManager';

export default class CalendarScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Calendar',
      headerLeft: <Icon iconStyle={{ marginLeft: 10, color: 'white' }} size={30} name="menu" onPress={navigation.toggleDrawer} />
    };
  }

  state = {
    loadingEvents: true,
    events: []
  };

  async componentDidMount() {
    try {
      const events = await GraphManager.getEvents();

      this.setState({
        loadingEvents: false,
        events: events.value
      });
    } catch(error) {
      alert(error);
    }
  }

  // Temporary JSON view
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.loadingEvents}>
          <View style={styles.loading}>
            <ActivityIndicator animating={this.state.loadingEvents} size='large' />
          </View>
        </Modal>
        <ScrollView>
          <Text>{JSON.stringify(this.state.events, null, 2)}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});