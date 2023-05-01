import React, { memo } from "react";
import { useCompanyQuery } from "~/generated";
import { Histories } from "../Histories/Histories";
import { wrapStyle } from "./Company.style";

/**
 * Rocketsの歴史
 */
export const Company: React.FC = () => {
  const { loading, data } = useCompanyQuery();
  const company = data?.company;

  console.log("  render company");
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Company Info</h1>
      <div style={wrapStyle}>
        <b>{company?.name}</b>
        <p>{company?.summary}</p>

        <Histories />
      </div>
    </>
  );
};
