import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexItemText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  }
});

const AppBarTab = ({ label, path, ...props }) => {
  return (
    <Link to={path} {...props}>
      <Text style={styles.flexItemText}>{label}</Text>
    </Link>
  );
};

export default AppBarTab;
