import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://api.api-ninjas.com/v1/",
  headers: {
    "X-Api-Key": "noZB2jRaDwoaCOtPRefMqA==HXf2dolu6fqd8Cle",
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});

export default client;
