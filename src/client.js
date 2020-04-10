import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://mobileapi.wp.pl/v1/graphql' }),
  cache,
  connectToDevTools: process.env && process.env.NODE_ENV === 'development',
})
