import Router from "next/router";
import React from "react";
import TaskAddTable from "./TaskTable/TaskAddTable";

const TaskAccept = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            งานที่รับทำ <i class="bi bi-file-earmark-plus-fill"></i>
            <button
              class="btn btn-outline-secondary float-end w-25 "
              onClick={() => Router.push("/subcontracts/createsubcontract")}
            >
              <i class="bi bi-folder-plus"></i> เพิ่มงานที่รับ
            </button>
          </h4>
        </div>
        <div>
          <TaskAddTable />
        </div>
      </div>
    </>
  );
};

export default TaskAccept;
