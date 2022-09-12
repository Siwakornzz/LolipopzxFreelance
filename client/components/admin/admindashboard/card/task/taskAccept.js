import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_TASKACCEPT } from "../../../../../apollo/queries";

const TaskAccept = () => {
  const { data } = useQuery(QUERY_TASKACCEPT, {});
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        มีคนรับทำแล้ว <i class="bi bi-check-lg"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.taskaccept.length} งาน</div>
      </div>
    </div>
  );
};

export default TaskAccept;
