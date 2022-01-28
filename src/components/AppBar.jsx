import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import { theme } from '../theme';

import AppBarTab from './AppBarTab';
import { GET_CURRENT_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useSignOut from '../hooks/useSignOut';

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
  const { data } = useQuery(GET_CURRENT_USER);
  const [signOut] = useSignOut();

  return(
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label="Repositories" path="/" />
        {data?.me?.username && <AppBarTab label="Create a review" path="/review" /> }
        {data?.me?.username && <AppBarTab label="Sign out" path="/signin" onPress={signOut} /> }
        {!data?.me?.username && <AppBarTab label="Sign in" path="/signin" /> }
      </ScrollView>
    </View>
  );
};

export default AppBar;
