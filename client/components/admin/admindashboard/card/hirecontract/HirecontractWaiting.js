import React from "react";
import Link from "next/link";
import { QUERY_HIRECONTRACTSWAITING } from "../../../../../apollo/queries";
import { useQuery } from "@apollo/client";
const HirecontractWaiting = () => {
  const { data } = useQuery(QUERY_HIRECONTRACTSWAITING, {});
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ที่กำลังรอการจับคู่งาน <i class="bi bi-file-plus-fill"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.hirecontractswaiting.length} งาน</div>
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
