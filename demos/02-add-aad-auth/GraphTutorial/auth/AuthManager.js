import { AuthConfig } from './AuthConfig';
import { AsyncStorage } from 'react-native';
import { authorize } from 'react-native-app-auth';

const config = {
  clientId: AuthConfig.appId,
  redirectUrl: Platform.OS === 'ios' ? 'urn:ietf:wg:oauth:2.0:oob' : 'graph-tutorial://react-native-auth',
  scopes: AuthConfig.appScopes,
  additionalParameters: { prompt: 'login' },
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  }
};

export class AuthManager {

  static signInAsync = async () => {
    const result = await authorize(config);

    //await AsyncStorage.setItem('userToken', result.accessToken);
    //await AsyncStorage.setItem('refreshToken', result.refreshToken);
    //await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate);

    return result;
  }

  signOutAsync = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('refreshToken');
  }

  getAccessTokenAsync = async() => {

  }
}