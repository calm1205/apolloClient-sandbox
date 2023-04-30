import { useQuery } from "@apollo/client";
import { GET_LOCATIONS, GetLocations } from "~/graphql";

export const Top = () => {
  const { loading, error, data } = useQuery<GetLocations>(GET_LOCATIONS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error: {error.message}</p>;

  const locations = data?.locations;

  console.log("render");

  return (
    <div>
      {!!locations || <p>no data</p>}
      {locations?.map((l) => (
        <div key={l.id}>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${l.photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{l.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
