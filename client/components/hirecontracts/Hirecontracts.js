import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTS } from "../../apollo/queries";
import CarouselHirecontract from "./CarouselHirecontract";
import HirecontractTable from "./hirecontractsTable/hirecontractTable";

const Hirecontracts = () => {
  const [subconData, setSubconData] = useState({});
  const { data } = useQuery(QUERY_HIRECONTRACTS, {
    onCompleted: (data) => {
      setSubconData(data.hirecontracts);
    },
  });
  console.log(data);
  return (
    <>
      <CarouselHirecontract />
      <div class="container">
        <div class="row">
          <HirecontractTable categorydata={subconData} />
        </div>
      </div>
    </>
  );
};

export default Hirecontracts;
