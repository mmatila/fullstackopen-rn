import { StyleSheet, View } from 'react-native';

import { theme } from '../../theme';

import Avatar from '../Avatar';
import Analytics from './Analytics';
import Tag from './Tag';
import Text from '../Text';
import { toRoundedString } from '../../utils/formats';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.light,
    flexDirection: 'column',
    padding: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  analyticsContainer: {
    flexDirection: 'row',
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.detailsContainer} testID="details">
        <Avatar uri={item.ownerAvatarUrl} />
        <View style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Text variant="heading">{item.fullName}</Text>
          <Text variant="subheading">{item.description}</Text>
          <Tag label={item.language} />
        </View>
      </View>
      <View style={styles.analyticsContainer} testID="analytics">
        <Analytics
          stars={toRoundedString(item.stargazersCount)}
          forks={toRoundedString(item.forksCount)}
          reviews={toRoundedString(item.reviewCount)}
          rating={toRoundedString(item.ratingAverage)}
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
