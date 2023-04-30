import { useRocketsQuery } from "~/generated";
import { Histories } from "./Histories";
import { Spacer } from "~/components";

/** 重めの処理 */
const heavyFunction = Math.max(...[...Array(20000)].map((_, i) => i));

/**
 * トップページ
 */
export const Top = () => {
  const { loading, data } = useRocketsQuery();
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

      <Spacer size={50} />

      <Histories />
    </div>
  );
};

const wrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
};
