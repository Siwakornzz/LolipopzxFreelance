import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTS } from "../../apollo/queries";
import CarouselHirecontract from "./CarouselHirecontract";
import HirecontractTable from "./hirecontractsTable/hirecontractTable";

const Hirecontracts = () => {
 
  return (
    <>
      <CarouselHirecontract />
      <div class="container">
        <div class="row">
          <HirecontractTable />
        </div>
      </div>
    </>
  );
};

export default Hirecontracts;
