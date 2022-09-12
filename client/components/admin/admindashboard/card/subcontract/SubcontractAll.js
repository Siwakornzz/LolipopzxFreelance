import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SUBCONTRACTS, QUERY_SUBCONTRACTSALL } from "../../../../../apollo/queries";

const SubcontractAll = () => {
  const { data } = useQuery(QUERY_SUBCONTRACTSALL, {});
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ที่ยื่นคำร้องมาทั้งหมด <i class="bi bi-file-plus-fill"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.subcontractsall.length} คน</div>
      </div>
    </div>
  );
};

export default SubcontractAll;
