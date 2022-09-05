import React from "react";

import CarouselSubcontract from "./CarouselSubcontract";
import SubcontractsTable from "./TableSubcontract/SubcontractsTable";

const Subcontracts = () => {
  return (
    <>
      <CarouselSubcontract />
      <div class="container">
        <div class="row g-3">
          <SubcontractsTable />
        </div>
      </div>
    </>
  );
};

export default Subcontracts;
