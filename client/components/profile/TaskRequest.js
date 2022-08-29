import React from "react";
import TaskRequestTable from "./TaskRequestTable";

const TaskRequest = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            งานที่ลงประกาศ <i class="bi bi-megaphone-fill"></i>
            <button class="btn btn-outline-secondary float-end w-25 ">
              <i class="bi bi-folder-plus"></i> เพิ่มงานที่ลงประกาศ
            </button>
          </h4>
        </div>
        <div>
          <TaskRequestTable/>
        </div>
      </div>
    </>
  );
};

export default TaskRequest;
