import { HYGRAPH_CONTENT_API } from "@/app/contants/envVariables";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: HYGRAPH_CONTENT_API,
  cache: new InMemoryCache(),
});

export default apolloClient;
