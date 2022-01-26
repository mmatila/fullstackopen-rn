import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 4,
  },
  text: {
    color: theme.colors.background.light,
  }
});

const Tag = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Tag;
