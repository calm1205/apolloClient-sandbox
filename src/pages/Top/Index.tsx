import { useEffect, useLayoutEffect, useRef } from "react";
import { useRocketsQuery } from "~/generated";

/** 重めの処理 */
const heavyFunction = () =>
  [...Array(20000)].forEach((i) => console.log("heavyData"));

/**
 * トップページ
 */
export const Top = () => {
  const { loading, data } = useRocketsQuery({ fetchPolicy: "network-only" });

  // if (loading) return <p> Loading... </p>;
  const ref = useRef(Date.now());
  useEffect(() => console.log("calculated", Date.now() - ref.current, "ms"));
  useLayoutEffect(() => console.log("mounted", Date.now() - ref.current, "ms"));

  heavyFunction();
  console.log("render", Date.now() - ref.current, "ms");

  return (
    <div>
      {data?.rockets?.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name ?? "--"}</b>
          <p>{rocket?.description ?? "--"}</p>
        </div>
      )) ?? <p>Loading...</p>}
    </div>
  );
};
