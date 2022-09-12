import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_TASKALL } from "../../../../../apollo/queries";

const TaskAll = () => {
  const [taskall, setTaskAll] = useState({});
  const { data } = useQuery(QUERY_TASKALL, {
    onCompleted: (data) => {
      setTaskAll(data.taskall);
    },
  });
  console.log(taskall);
  return (
    <div
      class="card text-bg-light mb-3 ms-2 mt-2 me-2 "
      style={{ maxWidth: "18rem", cursor: "pointer" }}
    >
      <div class="card-header">
        <i class="bi bi-people-fill"></i>
        <br />
        งานทั้งหมด <i class="bi bi-check-lg"></i>
      </div>
      <div class="card-body">
        <div class="card-text">{taskall.length} งาน</div>
      </div>
    </div>
  );
};

export default TaskAll;
