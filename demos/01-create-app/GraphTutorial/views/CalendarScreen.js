import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  // Temporary placeholder view
  render() {
    return (
      <View style={styles.container}>
        <Text>Calendar</Text>
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