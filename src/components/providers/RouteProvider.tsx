import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom";
import {
  ApolloBestPractice,
  ApolloSuspense,
  DoubleQuery,
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
    { path: urls.doubleQuery, element: <DoubleQuery /> },
  ]);
  return <Provider router={router} />;
};
