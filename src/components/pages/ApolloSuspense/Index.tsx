import { useRocketsLazyQuery } from "~/generated";
import { Histories, Spacer } from "~/components";
import { useEffect } from "react";

import { heavyFunction } from "~/lib";

/**
 * ApolloSuspense
 *
 * useSuspenseQuery_experimental: (apollo client 3.8.0 alpha)
 */
export const ApolloSuspense = () => {
  // const [fetch, { data }] = useSuspenseQuery_experimental();

  console.log("render parent");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* <h1>Rocket List</h1>
      {data?.rockets?.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name ?? "--"}</b>
          <p>{rocket?.description ?? "--"}</p>
        </div>
      ))}

      <Spacer size={50} />

      <Histories /> */}
    </div>
  );
};
