import ReactDOM from "react-dom/client";
import { Top } from "./pages/Top/Index";
import { ApolloProvider } from "./providers/ApolloProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ApolloProvider>
    <Top />
  </ApolloProvider>
  // </React.StrictMode>
);
