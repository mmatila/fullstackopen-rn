import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSort } from '../contexts/OrderContext';
import useRepositories from '../hooks/useRepositories';
import Picker from './Picker';
import RepositoryItem from './RepositoryItem/index';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  header: {
    padding: 10,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { dispatch } = useSort();
    const [text, setText] = useState('');
    const [debounced] = useDebounce(text, 500);

    useEffect(() => {
      dispatch({ type: 'SET_KEYWORD', payload: debounced });
    }, [debounced]);

    return (
      <View style={styles.header}>
        <Searchbar
          placeholder="Search"
          style={{ marginBottom: 10 }}
          onChangeText={(value) => setText(value)}
        />
        <Picker />
      </View>
    );
  };

  render() {
    return (
        <FlatList
          keyExtractor={(_, index) => index}
          ListHeaderComponent={this.renderHeader}
          data={
            this.props.repositories
              ? this.props.repositories.edges.map((edge) => edge.node)
              : []
            }
          ItemSeparatorComponent={ItemSeparator}
          renderItem={RepositoryItem}
      />
    );
  }
}

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;