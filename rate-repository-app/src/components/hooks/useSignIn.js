import { useMutation } from '@apollo/client';
import SIGN_IN from '../../graphql/mutations';
// import { useAuthStorage } from './useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({ variables: { credentials: { username, password } } });
      console.log('data---', data);
      // Handle the result or return the data
    } catch (error) {
      // Handle the error
    }
  };

  return [signIn, result];
};


export default useSignIn;
