import { useRocketsQuery } from "~/generated";
import { Company, Spacer } from "~/components";
import { wrapStyle } from "./Index.style";
import { useState } from "react";

/**
 * Apollo clientのbest practice
 *
 * parentのrenderは2回（loading: true → false）
 */
export const ApolloBestPractice = () => {
  const { loading, data } = useRocketsQuery();
  const [, setState] = useState(0);
  const count = () => setState((pre) => pre + 1);

  console.log("render parent");

  if (loading) return <p> Loading... </p>;

  return (
    <>
      <h1 onClick={count}>Rocket List</h1>
      <div style={wrapStyle}>
        {data?.rockets?.map((rocket) => (
          <div key={rocket?.id}>
            <b>{rocket?.name ?? "--"}</b>
            <p>{rocket?.description ?? "--"}</p>
          </div>
        ))}

        <Spacer size={50} />

        <Company />
      </div>
    </>
  );
};
