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
import { AuthManager } from '../auth/AuthManager';
import { GraphManager } from '../graph/GraphManager';

export default class DrawerMenuContent extends React.Component {

  state = {
    // TEMPORARY
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../images/no-profile-pic.png')
  }

  // Check if user tapped on the Sign Out button and
  // sign the user out
  _onItemPressed = async (route) => {
    if (route.route.routeName !== 'Sign Out') {
      this.props.onItemPress(route);
      return;
    }

    // Sign out
    await AuthManager.signOutAsync();
    this.props.navigation.navigate('Auth');
  }

  async componentDidMount() {
    // Get the signed-in user from Graph
    const user = await GraphManager.getUserAsync();

    // Update UI with display name and email
    this.setState({
      userName: user.displayName,
      // Work/School accounts have email address in mail attribute
      // Personal accounts have it in userPrincipalName
      userEmail: user.mail !== null ? user.mail : user.userPrincipalName,
    });
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
            <Text style={styles.profileUserName}>{this.state.userName}</Text>
            <Text style={styles.profileEmail}>{this.state.userEmail}</Text>
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
    alignItems: 'center',
    padding: 10
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  profileUserName: {
    fontWeight: '700'
  },
  profileEmail: {
    fontWeight: '200',
    fontSize: 10
  }
});
