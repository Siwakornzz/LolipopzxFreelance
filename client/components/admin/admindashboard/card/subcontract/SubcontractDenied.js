import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SUBCONTRACTSDENIED } from "../../../../../apollo/queries";

const SubcontractDenied = () => {
  const { data } = useQuery(QUERY_SUBCONTRACTSDENIED, {});
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ที่ปฎิเสธคำร้อง <i class="bi bi-file-plus-fill"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.subcontractsdenied.length} คน</div>
      </div>
    </div>
  );
};

export default SubcontractDenied;
