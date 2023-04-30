import { useEffect, useLayoutEffect, useRef } from "react";
import { useRocketsQuery } from "~/generated";

const start = Date.now();
/** 重めの処理 */
const heavyFunction = Math.max(...[...Array(20000)].map((_, i) => i));

/**
 * トップページ
 */
export const Top = () => {
  const { loading, data } = useRocketsQuery({ fetchPolicy: "network-only" });

  // if (loading) return <p> Loading... </p>;

  useEffect(() => console.log("calculated", Date.now() - start, "ms"));
  useLayoutEffect(() => console.log("displayed", Date.now() - start, "ms"));

  return (
    <div>
      <h1>Rocket List</h1>
      {data?.rockets?.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name ?? "--"}</b>
          <p>{rocket?.description ?? "--"}</p>
        </div>
      )) ?? <p>Loading...</p>}
    </div>
  );
};
