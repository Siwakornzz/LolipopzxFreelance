import Router from "next/router";
import React from "react";
import TaskSubcontractTable from "./TaskTable/TaskSubcontractTable";

const SubcontractTask = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            SUBCONTRACT <i class="bi bi-file-earmark-plus-fill"></i>
            <button
              class="btn btn-outline-secondary float-end w-25 "
              onClick={() => Router.push("/subcontracts/createsubcontract")}
            >
              <i class="bi bi-folder-plus"></i> เพิ่ม
            </button>
          </h4>
        </div>
        <div>
          <TaskSubcontractTable />
        </div>
      </div>
    </>
  );
};

export default SubcontractTask;
