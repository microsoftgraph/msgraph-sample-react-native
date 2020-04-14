//  Copyright (c) Microsoft. All rights reserved.
//  Licensed under the MIT license.

import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';

import { DrawerToggle, headerOptions } from '../menus/HeaderComponents';
import { GraphManager } from '../graph/GraphManager';

const Stack = createStackNavigator();
const initialState: CalendarScreenState = { loadingEvents: true, events: []};
const CalendarState = React.createContext(initialState);

type CalendarScreenState = {
  loadingEvents: boolean;
  events: any[];
}

// Temporary JSON view
const CalendarComponent = () => {
  const calendarState = React.useContext(CalendarState);

  return (
    <View style={styles.container}>
      <Modal visible={calendarState.loadingEvents}>
        <View style={styles.loading}>
          <ActivityIndicator animating={calendarState.loadingEvents} size='large' />
        </View>
      </Modal>
      <FlatList data={calendarState.events}
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

// <ConvertDateSnippet>
const convertDateTime = (dateTime: string): string => {
  const utcTime = moment.utc(dateTime);
  return utcTime.local().format('MMM Do H:mm a');
};
// </ConvertDateSnippet>

export default class CalendarScreen extends React.Component {

  state: CalendarScreenState = {
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
      Alert.alert(
        'Error getting events',
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

  render() {
    return (
      <CalendarState.Provider value={this.state}>
        <Stack.Navigator screenOptions={ headerOptions }>
          <Stack.Screen name='Calendar'
            component={ CalendarComponent }
            options={{
              title: 'Calendar',
              headerLeft: () => <DrawerToggle/>
            }} />
        </Stack.Navigator>
      </CalendarState.Provider>
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
