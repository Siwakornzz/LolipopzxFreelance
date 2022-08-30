import React from "react";
import TaskAddTable from "./TaskTable/TaskAddTable";

const TaskhasAssign = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            งานที่จ้างเข้ามา <i class="bi bi-box-arrow-in-down-left"></i>
          </h4>
        </div>
        <div>
          <TaskAddTable />
        </div>
      </div>
    </>
  );
};

export default TaskhasAssign;
