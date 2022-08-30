import React from "react";
import ProfileDetail from "./profileDetail";
import AddTask from "./Task/AddTask";
import TaskhasAssign from "./Task/TaskhasAssign";
import TaskRequest from "./Task/TaskRequest";
const ProfilePage = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <ProfileDetail />

          <div class="col-8 mt-5 ">
            <div class="row">
              <AddTask />
              <hr />
              <TaskRequest />
              <hr />
              <TaskhasAssign />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
