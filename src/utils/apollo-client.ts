import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: `endpoint`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
