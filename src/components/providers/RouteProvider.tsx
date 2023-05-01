import { PropsWithChildren } from "react";
import {
  RouterProvider as Provider,
  createBrowserRouter,
} from "react-router-dom";
import { Top } from "~/components";

export const RouteProvider = () => {
  const router = createBrowserRouter([{ path: "/", element: <Top /> }]);
  return <Provider router={router} />;
};
