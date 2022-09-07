import React from "react";
import HirecontractAccept from "./card/HirecontractAccept";
import HirecontractAll from "./card/HirecontractAll";
import HirecontractDenied from "./card/HirecontractDenied";
import HirecontractWaiting from "./card/HirecontractWaiting";

const Hirecontract = () => {
  return (
    <div class="col">
      <div class="mt-3 container">
        <div class="card">
          <div class="card-header text-center">
            ข้อมูลของผู้ว่าจ้างที่ประกาศหาคนรับทำงาน
          </div>
          <div class="row text-center">
            <div class="col-md-3">
              <HirecontractAll />
            </div>
            <div class="col-md-3">
              <HirecontractWaiting />
            </div>
            <div class="col-md-3">
              <HirecontractAccept />
            </div>
            <div class="col-md-3">
              <HirecontractDenied />
            </div>
          </div>
          <div class="text-center mt-5">
            <button class="btn btn-primary w-50 mb-3 mt-3">
              {" "}
              จัดการประกาศจ้างงาน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hirecontract;
