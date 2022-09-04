import React from "react";

import CarouselSubcontract from "./CarouselSubcontract";
import SubcontractsTable from "./TableSubcontract/SubcontractsTable";
import Category from "../category/Category";

const Subcontracts = () => {
  return (
    <>
      <CarouselSubcontract />
      <div class="container">
        <div class="row">
          <SubcontractsTable />
        </div>
      </div>
    </>
  );
};

export default Subcontracts;
