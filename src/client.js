import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://mobileapi.wp.pl/v1/graphql' }),
  cache: new InMemoryCache(),
  connectToDevTools: process.env && process.env.NODE_ENV === 'development',
});

