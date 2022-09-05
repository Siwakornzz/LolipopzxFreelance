import React from "react";

const SubcontractCard = () => {
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        กำลังรอการอนุมัติ <i class="bi bi-arrow-clockwise"></i>
      </div>
      <div class="card-body">
        <div class="card-text">20 คน</div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm">
          {" "}
          จัดการประกาศงานที่ร้องขอเข้ามา
        </button>
      </div>
    </div>
  );
};

export default SubcontractCard;
