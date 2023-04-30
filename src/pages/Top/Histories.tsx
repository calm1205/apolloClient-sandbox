import React from "react";
import { useHistoriesQuery } from "~/generated";

/**
 * Rocketsの歴史
 */
export const Histories: React.FC = () => {
  const { loading, data } = useHistoriesQuery();

  if (loading) return <p>Loading...</p>;
  return (
    <div style={wrapStyle}>
      <h1>Rockets Histories</h1>
      {data?.histories?.map((h) => (
        <section key={h?.title}>
          <b>{h?.title}</b>
          <p>{h?.details}</p>
        </section>
      ))}
    </div>
  );
};

const wrapStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
