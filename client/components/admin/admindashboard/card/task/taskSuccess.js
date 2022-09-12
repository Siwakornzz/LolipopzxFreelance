import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_TASKSUCCESS } from "../../../../../apollo/queries";

const TaskSuccess = () => {
  const { data } = useQuery(QUERY_TASKSUCCESS, {});
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        ทีสำเร็จแล้ว <i class="bi bi-check-lg"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{data?.tasksuccess.length} งาน</div>
      </div>
    </div>
  );
};

export default TaskSuccess;
