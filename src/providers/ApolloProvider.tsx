import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <Provider client={client}>{children}</Provider>
);
