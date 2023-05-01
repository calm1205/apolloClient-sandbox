import React from "react";
import { useHistoriesQuery } from "~/generated";
import { wrapStyle } from "./Histories.style";

/**
 * Rocketsの歴史
 */
export const Histories: React.FC = () => {
  const { loading, data } = useHistoriesQuery();

  console.log("    render history");
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Rockets Histories</h2>
      <div style={wrapStyle}>
        {data?.histories?.map((h) => (
          <section key={h?.title}>
            <b>{h?.title}</b>
            <p>{h?.details}</p>
          </section>
        ))}
      </div>
    </>
  );
};
