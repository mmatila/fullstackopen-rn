import { useQuery } from '@apollo/client';
import { useSort } from '../contexts/OrderContext';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { order } = useSort();
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: order,
  });
  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
