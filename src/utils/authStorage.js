import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return accessToken;
  }

  async setAccessToken(token) {
    const accessToken = await AsyncStorage.setItem(`${this.namespace}:accessToken`, token);
    return accessToken;
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
