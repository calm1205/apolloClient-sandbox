import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import { FC, PropsWithChildren } from "react";

const endpoint = "https://flyby-router-demo.herokuapp.com/";

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
});

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider client={client} children={children} />
);
