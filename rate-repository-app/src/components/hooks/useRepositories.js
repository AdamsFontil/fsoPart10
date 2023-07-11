import { useQuery } from '@apollo/client';
import GET_REPOSITORIES from '../../graphql/querries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network'})

  console.log('data---', data)
  console.log('repos---', data?.repositories)

  if (error) {
    console.error('Error fetching repositories:', error);
  }

  return { repositories: data?.repositories, loading, refetch };
};

export default useRepositories;
