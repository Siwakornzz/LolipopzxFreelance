import Link from "next/link";
import React from "react";
import TaskAccept from "../card/task/taskAccept";
import TaskAll from "../card/task/taskAll";
import Taskdenied from "../card/task/taskDenied";
import TaskSuccess from "../card/task/taskSuccess";

const Task = () => {
  return (
    <div class="col">
      <div class="mt-3 container">
        <div class="card">
          <div class="card-header text-center">
            ข้อมูลการทำงานของแต่ละคำร้อง
          </div>
          <div class="row text-center">
            <div class="col-md-3">
              <TaskAll />
            </div>
            <div class="col-md-3">
                <TaskAccept />
            </div>
            <div class="col-md-3">
                <Taskdenied/>
            </div>
            <div class="col-md-3">
                <TaskSuccess/>
            </div>
          </div>
          <div class="text-center">
            <Link href="/admin/managetask">
              <button class="btn btn-primary w-50  mb-3 mt-4 text-center">
                {" "}
                งานทั้งหมดที่มีคนรับทำ{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
