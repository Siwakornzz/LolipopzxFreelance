import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_HIRECONTRACTSAPPROVED } from "../../../../../apollo/queries";

const HirecontractAccept = () => {
  const { data } = useQuery(QUERY_HIRECONTRACTSAPPROVED);
  console.log(data)
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ที่มีคนรับงานแล้ว <i class="bi bi-file-plus-fill"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.hirecontractsapproved.length} งาน</div>
      </div>
    </div>
  );
};

export default HirecontractAccept;
