import { View, StyleSheet, Text as NativeText } from 'react-native';
import { format } from 'date-fns';
import { theme } from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'white',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  metaContainer: {

  },
});

const Review = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <NativeText style={{ color: theme.colors.primary, fontWeight: theme.fontWeights.bold, fontSize: 16 }}>{item.rating}</NativeText>
      </View>
      <View>
        <Text variant='heading'>{item.user.username}</Text>
        <Text variant="subheading" fontSize={14}>{format(new Date(item.createdAt), 'dd.mm.yyyy')}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

export default Review;
