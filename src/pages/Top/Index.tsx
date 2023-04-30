import { useEffect, useLayoutEffect, useRef } from "react";
import { useRocketsQuery } from "~/generated";
import { Histories } from "./Histories";

/** 重めの処理 */
const heavyFunction = Math.max(...[...Array(20000)].map((_, i) => i));

/**
 * トップページ
 */
export const Top = () => {
  const start = Date.now();
  const { loading, data } = useRocketsQuery({ fetchPolicy: "network-only" });

  useEffect(() => console.log("calculated", Date.now() - start, "ms"));
  useLayoutEffect(() => console.log("displayed", Date.now() - start, "ms"));
  if (loading) return <p> Loading... </p>;

  return (
    <div style={wrap}>
      <h1>Rocket List</h1>
      {data?.rockets?.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name ?? "--"}</b>
          <p>{rocket?.description ?? "--"}</p>
        </div>
      ))}

      <Spacer />

      <Histories />
    </div>
  );
};

const wrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
};
const Spacer = () => <div style={{ height: 50 }}></div>;
