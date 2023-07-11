import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

const App = () => {

  console.log('constants---',Constants.manifest);
  console.log('constants extra----', Constants.manifest.extra)

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
