import React from "react";
import Organization from "./Organization";
import data from "./data/org_data.json";

function OrgList() {
  return (
    <div>
      {data.map((org, index) => (
        <Organization key={index} index={index} org={org} />
      ))}
    </div>
  );
}
export default OrgList;
