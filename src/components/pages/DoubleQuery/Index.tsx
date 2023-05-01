import {
  useCompanyQuery,
  useHistoriesQuery,
  useRocketsQuery,
} from "~/generated";
import { Spacer } from "~/components";
import { wrapStyle } from "./Index.style";
import { Company } from "./components/Company";
import { Histories } from "./components/Histories";

/**
 * 並列でquery呼び出し
 */
export const DoubleQuery = () => {
  const rockets = useRocketsQuery();
  const company = useCompanyQuery();
  const histories = useHistoriesQuery();

  console.log("render parent");

  const isLoading = rockets.loading || company.loading || histories.loading;
  if (isLoading) return <p> Loading... </p>;

  const rocketsResponse = rockets.data?.rockets;
  const companyResponse = company.data?.company;
  const historiesResponse = histories.data?.histories;

  return (
    <>
      <h1>Double Query</h1>

      <div style={wrapStyle}>
        <h2>Rockets</h2>
        {rocketsResponse?.map((rocket) => (
          <div key={rocket?.id}>
            <b>{rocket?.name ?? "--"}</b>
            <p>{rocket?.description ?? "--"}</p>
          </div>
        ))}

        <Spacer size={50} />
        <Company {...companyResponse} />

        <Spacer size={50} />
        <Histories histories={historiesResponse} />
      </div>
    </>
  );
};
