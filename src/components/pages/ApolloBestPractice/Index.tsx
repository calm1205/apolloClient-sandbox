import { useRocketsQuery } from "~/generated";
import { Company, Spacer } from "~/components";
import { heavyFunction } from "~/lib";
import { wrapStyle } from "./Index.style";

/**
 * Apollo clientのbest practice
 *
 * parentのrenderは2回（loading: true → false）
 */
export const ApolloBestPractice = () => {
  const { loading, data } = useRocketsQuery();

  console.log("render parent");
  heavyFunction();

  if (loading) return <p> Loading... </p>;

  return (
    <>
      <h1>Rocket List</h1>
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
