import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import { theme } from '../theme';

import AppBar from './AppBar';
import Repository from './Repository';
import RepositoryList from './RepositoryList';
import ReviewForm from './ReviewForm';
import SignIn from './SignIn';
import SignUpForm from './SignUpForm';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.main,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUpForm />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/:id" element={<Repository />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;