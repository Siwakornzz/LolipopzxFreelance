import React from "react";
import FormDetail from "./FormDetail";
import ProfileDetail from "./profileDetail";
const EditProfile = () => {
  return (
    <div class="container">
      <div class="card mt-3">
        <div class="card-header text-center"> <i class="bi bi-person-badge"></i> ข้อมูลส่วนตัว</div>
        <div class="card-body">
          <div class="row">
            <ProfileDetail />

            <div class="col">
              <div class="card">
                <div class="card-header text-center">แก้ไขข้อมูลส่วนตัว</div>
                <div class="">
                  <FormDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
