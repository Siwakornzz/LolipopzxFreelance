import React from "react";

const SubcontractAccept = () => {
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ผ่านการอนุมัติแล้ว <i class="bi bi-check-lg"></i>
      </div>
      <div class="card-body">
        <div class="card-text">20 คน</div>
      </div>
    </div>
  );
};

export default SubcontractAccept;
