import React from "react";
import Organization from "./Organization";
// import data from "./data/org_data.json";

function OrgList() {
  const data = [
    { name: "AUG_DEV", username: "1234", password: "123w" },
    { name: "AUG_QA", username: "1234", password: "123w" },
  ];

  return (
    <div>
      {data.map((org, index) => (
        <Organization key={index} index={index} org={org} />
      ))}
    </div>
  );
}
export default OrgList;
