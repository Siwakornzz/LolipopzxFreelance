import React from "react";
import Link from 'next/link'
const HirecontractWaiting = () => {
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ที่กำลังรอการตอบรับ <i class="bi bi-file-plus-fill"></i>
      </div>
      <div class="card-body">
        <div class="card-text">20 งาน</div>
      </div>
      <div class="card-footer">
        <Link href="admin/matching">
          <button class="btn btn-primary btn-sm">
            {" "}
            จัดการจับคู่ให้กับประกาศ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HirecontractWaiting;
