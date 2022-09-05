import React from "react";
import Hirecontract from "./Hirecontract";
import Subcontract from "./Subcontract";

const DashboardForm = () => {
  return (
    <>
      <div class="card">
        <div class="card-header mt-2 text-center">
          <h3> จัดการผู้ประสานงาน</h3>
        </div>

        <div class="row mt-1 ms-1 me-1 mb-1">
          <div class="col ">
            <Subcontract />
          </div>
          <div class="col">
            <Hirecontract />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardForm;
