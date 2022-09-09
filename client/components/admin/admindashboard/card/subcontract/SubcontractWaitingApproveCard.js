import { useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { QUERTY_SUBCONTRACTSWAITING } from "../../../../../apollo/queries";

const SubcontractCard = () => {
  const { data } = useQuery(QUERTY_SUBCONTRACTSWAITING, {});
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
        <div class="card-text">{data?.subcontractswaiting.length} คน</div>
      </div>
      <div class="card-footer">
        <Link href="/admin/managesubcontractWaiting">
          <button class="btn btn-primary btn-sm">
            {" "}
            จัดการประกาศงานที่ร้องขอเข้ามา
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubcontractCard;
