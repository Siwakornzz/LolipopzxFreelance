import React from "react";
import TaskJobRequestTable from "./TaskTable/TaskJobRequestTable";

const TaskhasAssign = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            งานที่จ้างเข้ามา <i class="bi bi-file-earmark-plus-fill"></i>
          </h4>
        </div>
        <div>
          <TaskJobRequestTable />
        </div>
      </div>
    </>
  );
};

export default TaskhasAssign;
