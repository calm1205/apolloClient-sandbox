import { useRocketsQuery } from "~/generated";
import { Histories, Spacer } from "~/components";
import { useEffect } from "react";
import { wrap } from "./Index.style";
import { heavyFunction } from "~/lib";

/**
 * トップページ
 */
export const Top = () => {
  const { loading, data } = useRocketsQuery();

  console.log("render parent");
  useEffect(() => heavyFunction(), [data]);

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
