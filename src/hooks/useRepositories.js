import { useQuery } from '@apollo/client';
import { useSort } from '../contexts/OrderContext';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { order } = useSort();
  const { data, loading, fetchMore, error } = useQuery(GET_REPOSITORIES, {
    variables: {
      ...order,
      first: 8
    },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...order,
      },
    });
  };
  
  const repositories = data?.repositories;

  return { repositories, loading, fetchMore: handleFetchMore };
};

export default useRepositories;
