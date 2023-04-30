import type { CodegenConfig } from "@graphql-codegen/cli";
import { endpoint } from "./src/constants";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${endpoint}/graphql`,
  documents: "src/graphql/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
