import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

console.log('uri---', Constants.manifest.extra.uri)

// uri: Constants.manifest.extra.uri
const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: Constants.manifest.extra.uri

});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    fetchPolicy: 'cache-and-network'
  });
};
export default createApolloClient;
