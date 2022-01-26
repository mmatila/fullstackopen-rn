import { StyleSheet, View } from "react-native";

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    padding: 8,
  },
});

const Block = ({ label, count }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text variant="heading" fontSize={16}>{count}</Text>
      <Text variant="subheading">{label}</Text>
    </View>
  );
};

const Analytics = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.container}>
      <Block label="Stars" count={stars} />
      <Block label="Forks" count={forks} />
      <Block label="Reviews" count={reviews} />
      <Block label="Rating" count={rating} />
    </View>
  );
};

export default Analytics;
