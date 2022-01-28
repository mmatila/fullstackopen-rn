import { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import OrderContext from '../contexts/OrderContext';
import useRepositories from '../hooks/useRepositories';
import Picker from './Picker';
import RepositoryItem from './RepositoryItem/index';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      keyExtractor={(_, index) => index}
      ListHeaderComponent={<Picker />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
  />
  );
};

const RepositoryList = () => {
  const order = useContext(OrderContext);
  console.log(order);
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;