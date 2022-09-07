import React, { useContext } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import ProfileDetail from "./profileDetail";
import SubcontractTask from "./Task/SubcontractTask";
import TaskhasAssign from "./Task/TaskhasAssign";
import HirecontractTask from "./Task/HirecontractTask";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div class="container">
        <div class="row">
          {user && (
            <>
              <ProfileDetail />

              <div class="col-8 mt-5 ">
                <div class="row">
                  <SubcontractTask />
                  <hr />
                  <HirecontractTask />
                  <hr />
                  <TaskhasAssign />
                  <hr />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
