import React from "react";

import Managehirecontractstable from "./table/Managehirecontractstable";

const ManageHirecontracts = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4 class="text-center">จัดการข้อมูลผู้ว่าจ้าง </h4>
        </div>
        <div>
          <Managehirecontractstable />
        </div>
      </div>
    </>
  );
};

export default ManageHirecontracts;
