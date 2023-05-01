import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom";
import { ApolloBestPractice, LazyQuery, Top } from "~/components";
import { urls } from "~/constants";

export const RouteProvider = () => {
  const router = createBrowserRouter([
    { path: urls.top, element: <Top /> },
    { path: urls.apolloBest, element: <ApolloBestPractice /> },
    { path: urls.lazyQuery, element: <LazyQuery /> },
  ]);
  return <Provider router={router} />;
};
