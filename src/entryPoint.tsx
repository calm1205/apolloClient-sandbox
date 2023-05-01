import ReactDOM from "react-dom/client";
import { ApolloProvider, RouteProvider, Top } from "~/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ApolloProvider>
    <RouteProvider />
  </ApolloProvider>
  // </React.StrictMode>
);
