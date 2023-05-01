import { useRocketsQuery } from "~/generated";
import { Histories, Spacer } from "~/components";
import { heavyFunction } from "~/lib";

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
