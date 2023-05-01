import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom";
import {
  ApolloBestPractice,
  ApolloSuspense,
  LazyQuery,
  Top,
} from "~/components";
import { urls } from "~/constants";

export const RouteProvider = () => {
  const router = createBrowserRouter([
    { path: urls.top, element: <Top /> },
    { path: urls.apolloBest, element: <ApolloBestPractice /> },
    { path: urls.lazyQuery, element: <LazyQuery /> },
    { path: urls.apolloSuspense, element: <ApolloSuspense /> },
  ]);
  return <Provider router={router} />;
};
