import type { CodegenConfig } from "@graphql-codegen/cli";
import { endpoint } from "./src/constants";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${endpoint}/graphql`,
  documents: "src/graphql/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
