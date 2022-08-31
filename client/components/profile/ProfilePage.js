import React, { useContext } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import ProfileDetail from "./profileDetail";
import AddTask from "./Task/AddTask";
import TaskhasAssign from "./Task/TaskhasAssign";
import TaskRequest from "./Task/TaskRequest";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
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
      )}
    </>
  );
};

export default ProfilePage;
