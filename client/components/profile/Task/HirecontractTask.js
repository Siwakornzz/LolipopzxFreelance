import Router from "next/router";
import React from "react";
import TaskHirecontractTable from "./TaskTable/TaskHirecontractTable";

const HirecontractTask = () => {
  return (
    <>
      <div class="card-body ms-5">
        <div class="mt-5">
          <h4>
            HIRECONTRACT <i class="bi bi-megaphone-fill"></i>
            <button
              class="btn btn-outline-secondary float-end w-25 "
              onClick={() => Router.push("/hirecontracts/createhirecontract")}
            >
              <i class="bi bi-folder-plus"></i> เพิ่ม
            </button>
          </h4>
        </div>
        <div>
          <TaskHirecontractTable />
        </div>
      </div>
    </>
  );
};

export default HirecontractTask;
