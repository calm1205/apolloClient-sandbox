import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import { FC, PropsWithChildren } from "react";
import { endpoint } from "~/constants";

const client = new ApolloClient({
  uri: endpoint,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: { fetchPolicy: "network-only" },
    watchQuery: { fetchPolicy: "network-only" },
  },
});

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider client={client} children={children} />
);
