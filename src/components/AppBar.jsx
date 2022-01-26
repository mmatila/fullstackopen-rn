import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { theme } from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 16,
    paddingLeft: 8,
    height: Constants.statusBarHeight + 56,
    backgroundColor: theme.colors.darkBackground,
  },
});

const AppBar = () => {
  return(
    <View style={styles.container}>
      <AppBarTab label="Repositories" onPress={() => {}} />
    </View>
  );
};

export default AppBar;
