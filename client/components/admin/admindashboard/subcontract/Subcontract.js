import React from "react";
import SubcontractAccept from "../card/subcontract/SubcontractAccept";
import SubcontractAll from "../card/subcontract/SubcontractAll";
import SubcontractDenied from "../card/subcontract/SubcontractDenied";
import SubcontractCard from "../card/subcontract/SubcontractWaitingApproveCard";

const Subcontract = () => {
  return (
    <div class="col">
      <div class="mt-3 container">
        <div class="card">
          <div class="card-header text-center">
            ข้อมูลของผู้ว่าจ้างที่ประกาศรับงาน
          </div>
          <div class="row text-center">
            <div class="col-md-3">
              <SubcontractAll />
            </div>
            <div class="col-md-3">
              <SubcontractCard />
            </div>
            <div class="col-md-3">
              <SubcontractAccept />
            </div>
            <div class="col-md-3">
              <SubcontractDenied />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Subcontract;
