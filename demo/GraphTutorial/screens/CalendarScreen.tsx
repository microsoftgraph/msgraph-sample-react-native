// Copyright (c) Microsoft.
// Licensed under the MIT license.

import React from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import moment from 'moment-timezone';
import { findOneIana } from 'windows-iana';

import { UserContext } from '../UserContext';
import { GraphManager } from '../graph/GraphManager';

const Stack = createStackNavigator();
const CalendarState = React.createContext<CalendarScreenState>({
  loadingEvents: true,
  events: []
});

type CalendarScreenState = {
  loadingEvents: boolean;
  events: MicrosoftGraph.Event[];
}

const CalendarComponent = () => {
  const calendarState = React.useContext(CalendarState);

  return (
    <View style={styles.container}>
      <Modal visible={calendarState.loadingEvents}>
        <View style={styles.loading}>
          <ActivityIndicator
            color={Platform.OS === 'android' ? '#276b80' : undefined}
            animating={calendarState.loadingEvents}
            size='large' />
        </View>
      </Modal>
      <FlatList data={calendarState.events}
        renderItem={({item}) =>
          <View style={styles.eventItem}>
            <Text style={styles.eventSubject}>{item.subject}</Text>
            <Text style={styles.eventOrganizer}>{item.organizer!.emailAddress!.name!}</Text>
            <Text style={styles.eventDuration}>
              {convertDateTime(item.start!.dateTime!)} - {convertDateTime(item.end!.dateTime!)}
            </Text>
          </View>
        } />
    </View>
  );
}

// <ConvertDateSnippet>
const convertDateTime = (dateTime: string): string => {
  return moment(dateTime).format('MMM Do H:mm a');
};
// </ConvertDateSnippet>

export default class CalendarScreen extends React.Component {
  static contextType = UserContext;

  state: CalendarScreenState = {
    loadingEvents: true,
    events: []
  };

  async componentDidMount() {
    try {
      const tz = this.context.userTimeZone || 'UTC';
      // Convert user's Windows time zone ("Pacific Standard Time")
      // to IANA format ("America/Los_Angeles")
      // Moment.js needs IANA format
      const ianaTimeZone = findOneIana(tz);

      // Get midnight on the start of the current week in the user's
      // time zone, but in UTC. For example, for PST, the time value
      // would be 07:00:00Z
      const startOfWeek = moment
        .tz(ianaTimeZone!.valueOf())
        .startOf('week')
        .utc();

      const endOfWeek = moment(startOfWeek)
        .add(7, 'day');

      const events = await GraphManager.getCalendarView(
        startOfWeek.format(),
        endOfWeek.format(),
        tz);

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
        <Stack.Navigator>
          <Stack.Screen name='Calendar'
            component={ CalendarComponent }
            options={{
              headerShown: false
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
