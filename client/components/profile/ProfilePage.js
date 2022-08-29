import React from "react";
import ProfileDetail from "./profileDetail";
import TaskAccept from "./TaskAccept";
import TaskRequest from "./TaskRequest";
const ProfilePage = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <ProfileDetail />

          <div class="col-8 mt-5 ">
            <div class="row">
              <TaskAccept />
              <TaskRequest />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
