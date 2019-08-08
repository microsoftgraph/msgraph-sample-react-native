import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class DrawerMenuContent extends React.Component {

  state = {
    userName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userPhoto: require('../images/no-profile-pic.png')
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
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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