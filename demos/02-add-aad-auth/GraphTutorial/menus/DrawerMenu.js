import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class DrawerMenuContent extends React.Component {

  state = {
    // TEMPORARY
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../images/no-profile-pic.png')
  }

  // Check if user tapped on the Sign Out button and
  // sign the user out
  _onItemPressed = (route) => {
    if (route.route.routeName !== 'Sign Out') {
      this.props.onItemPress(route);
      return;
    }

    // Sign out
    // TEMPORARY
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={styles.profileView}>
            <Image source={this.state.userPhoto}
              resizeMode='contain'
              style={styles.profilePhoto} />
            <View style={styles.profileCard}>
              <Text style={styles.profileUserName}>{this.state.userName}</Text>
              <Text style={styles.profileEmail}>{this.state.userEmail}</Text>
            </View>
          </View>
          <DrawerItems {...this.props}
            onItemPress={this._onItemPressed}/>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileView: {
    flexDirection: 'row',
    padding: 10
  },
  profilePhoto: {
    marginRight: 10,
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileCard: {
    justifyContent: 'center',
    margin: 10
  },
  profileUserName: {
    fontWeight: '700'
  },
  profileEmail: {
    fontWeight: '200'
  }
});
