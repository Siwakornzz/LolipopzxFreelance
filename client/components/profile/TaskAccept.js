import React from "react";
import TaskAcceptTable from "./TaskAcceptTable";

const TaskAccept = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            งานที่รับทำ <i class="bi bi-file-earmark-plus-fill"></i>
            <button class="btn btn-outline-secondary float-end w-25 ">
              <i class="bi bi-folder-plus"></i> เพิ่มงานที่รับ
            </button>
          </h4>
        </div>
        <div>
          <TaskAcceptTable />
        </div>
      </div>
    </>
  );
};

export default TaskAccept;
