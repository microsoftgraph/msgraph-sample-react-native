import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class CalendarScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Calendar',
      headerLeft: <Icon iconStyle={{ marginLeft: 10, color: 'white' }} size={30} name="menu" onPress={navigation.toggleDrawer} />
    };
  }

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