import { useRocketsQuery } from "~/generated";

export const Top = () => {
  const { loading, error, data } = useRocketsQuery();

  // if (loading) return <p> Loading... </p>;
  // if (error) return <p> Error: {error.message}</p>;

  const rockets = data?.rockets?.filter((r) => r) ?? [];

  console.log("render");

  return (
    <div>
      {!!rockets.length || <p>no data</p>}
      {rockets.map((rocket) => (
        <div key={rocket?.id}>
          <b>{rocket?.name}</b>
          <p>{rocket?.description}</p>
        </div>
      ))}
    </div>
  );
};
