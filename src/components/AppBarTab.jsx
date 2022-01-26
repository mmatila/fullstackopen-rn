import { StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  flexItemText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});

const AppBarTab = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.flexItemText}>{label}</Text>
    </Pressable>
  );
};

export default AppBarTab;
