import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../components/graphql/queries';

const useRepositories = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });
  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
