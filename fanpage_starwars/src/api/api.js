import {
    ApolloClient,
    InMemoryCache,
    createHttpLink
  } from "@apollo/client";


const httpLink = createHttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

export default client