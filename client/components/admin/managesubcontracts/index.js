import React from "react";
import ManagesubcontractsItem from "./table/ManagesubcontractsItem";

const Managesubcontracts = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4 class="text-center">จัดการข้อมูลผู้รับเหมาช่วง </h4>
        </div>
        <div>
          <ManagesubcontractsItem />
        </div>
      </div>
    </>
  );
};

export default Managesubcontracts;
