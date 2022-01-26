import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexItemText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  }
});

const AppBarTab = ({ label, path }) => {
  return (
    <Link to={path}>
      <Text style={styles.flexItemText}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;
