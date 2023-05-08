import { useRocketsLazyQuery } from "~/generated";
import { Histories, Spacer } from "~/components";
import { useCallback, useEffect } from "react";

import { heavyFunction } from "~/lib";

/**
 * lazyQueryをuseEffectで制御
 *
 * fetchは1回しかされないはずだが3回renderする。
 * 1. mount
 * 2. fetch start
 * 3. loading: true → false
 */
export const LazyQuery = () => {
  const [fetch, { data }] = useRocketsLazyQuery();
  const synchronousFetch = useCallback(async () => await fetch(), [fetch]);

  console.log("render parent");

  useEffect(() => {
    console.log("fetch start");
    synchronousFetch();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Rocket List</h1>
      {data?.rockets?.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name ?? "--"}</b>
          <p>{rocket?.description ?? "--"}</p>
        </div>
      ))}

      <Spacer size={50} />

      <Histories />
    </div>
  );
};
