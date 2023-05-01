import { useRocketsQuery } from "~/generated";
import { Company, Spacer } from "~/components";
import { wrapStyle } from "./Index.style";
import { useMemo, useState } from "react";
import { heavyFunction } from "~/lib";

/**
 * Apollo clientのbest practice
 *
 * parentのrenderは2回（loading: true → false）
 */
export const ApolloBestPractice = () => {
  const { loading, data } = useRocketsQuery();

  // mount後のre-render用
  const [, setState] = useState(0);
  const count = () => setState((pre) => pre + 1);

  console.log("render parent");

  // apiのresponseをmemo化
  const rockets = useMemo(() => {
    console.log("useMemo");
    heavyFunction();
    return data?.rockets;
  }, [data]);

  if (loading) return <p> Loading... </p>;

  return (
    <>
      <h1 onClick={count} style={{ cursor: "pointer" }}>
        Rocket List
      </h1>
      <div style={wrapStyle}>
        {rockets?.map((rocket) => (
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
