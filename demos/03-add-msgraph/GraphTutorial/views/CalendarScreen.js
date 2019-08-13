import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GraphManager } from '../graph/GraphManager';
import moment from 'moment';

convertDateTime = (dateTime) => {
  const utcTime = moment.utc(dateTime);
  return utcTime.local().format('MMM Do H:mm a');
};

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
        <FlatList data={this.state.events}
          renderItem={({item}) =>
            <View style={styles.eventItem}>
              <Text style={styles.eventSubject}>{item.subject}</Text>
              <Text style={styles.eventOrganizer}>{item.organizer.emailAddress.name}</Text>
              <Text style={styles.eventDuration}>
                {convertDateTime(item.start.dateTime)} - {convertDateTime(item.end.dateTime)}
              </Text>
            </View>
          } />
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
  },
  eventItem: {
    padding: 10
  },
  eventSubject: {
    fontWeight: '700',
    fontSize: 18
  },
  eventOrganizer: {
    fontWeight: '200'
  },
  eventDuration: {
    fontWeight: '200'
  }
});