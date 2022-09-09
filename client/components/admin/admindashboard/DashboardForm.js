import React from "react";
import Subcontract from "./subcontract/Subcontract";
import Hirecontract from "./hirecontract/Hirecontract";
import User from "./user/User";

const DashboardForm = () => {
  return (
    <>
      <div class="card">
        <div class="card-header mt-2 text-center">
          <h3> จัดการผู้ประสานงาน</h3>
        </div>

        <div class="row mt-1 ms-1 me-1 mb-1">
          <div class="col-md-3 ">
            <User />
          </div>
          <div class="col">
            <Subcontract />
          </div>
        </div>

        <div class="row mt-1 ms-1 me-1 mb-1">
          <div class="col "></div>
          <div class="col"> </div>
        </div>

        <div class="row mt-1 ms-1 me-1 mb-1">
          <div class="col-md-3 "></div>
          <div class="col">
            {" "}
            <Hirecontract />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardForm;
