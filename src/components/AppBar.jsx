import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { theme } from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 16,
    paddingLeft: 8,
    height: Constants.statusBarHeight + 56,
    backgroundColor: theme.colors.background.dark,
  },
});

const AppBar = () => {
  return(
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" path="/" />
        <AppBarTab label="Sign in" path="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
