import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { persistCache } from 'apollo-cache-persist';

export const getClient = async () => {
  const cache = new InMemoryCache();

  await persistCache({
    cache,
    storage: window.localStorage,
  });

  return new ApolloClient({
    link: new HttpLink({ uri: 'https://mobileapi.wp.pl/v1/graphql' }),
    cache,
    connectToDevTools: process.env && process.env.NODE_ENV === 'development',
  })

}
