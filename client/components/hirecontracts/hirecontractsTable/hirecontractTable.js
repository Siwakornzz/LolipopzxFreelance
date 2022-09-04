import React from "react";

const HirecontractTable = (hirecontract) => {
  console.log(hirecontract);
  return (
    <div key={hirecontract.hirecontract.id}>
      <p>{hirecontract.hirecontract.id}</p>
      <p>{hirecontract.hirecontract.topic}</p>
      {hirecontract.hirecontract.detail}
      {hirecontract.hirecontract.budget}
      {hirecontract.hirecontract.status}
      {hirecontract.hirecontract.createdAt}
    </div>
  );
};

export default HirecontractTable;
