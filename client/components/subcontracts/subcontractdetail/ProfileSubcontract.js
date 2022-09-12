import React, { useState } from "react";

const ProfileSubcontract = (subcontract) => {
  return (
    // <>
    // </>
    <div class="card mt-4" style={{ border: "2px solid #0d6efd" }}>
      <div class=" text-center">
        <div class="">
          <div class="card-body mt-5">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9d2cdf40760693.578c9a46bcad6.gif"
              class="rounded-circle"
              alt="Avatar"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                border: "3px #333 solid",
              }}
            />
            <b>
              <h3 class="mt-5">
                {
                  subcontract.subcontract.subcontract.subcontractCreatorId
                    .username
                }
              </h3>
            </b>
            <div class=" text-start mt-5 ms-3 mb-5">
              <hr />
              <b>
                <p>ข้อมูลติดต่อ</p>{" "}
              </b>

              <p>
                <i class="bi bi-telephone-fill" style={{ color: "#333" }}></i>{" "}
                เบอร์โทรศัพท์ :{" "}
                {subcontract.subcontract.subcontract.subcontractCreatorId.tel}
              </p>
              <p>
                <i class="bi bi-envelope-fill" style={{ color: "#333" }}></i>{" "}
                อีเมล์ :{" "}
                {subcontract.subcontract.subcontract.subcontractCreatorId.email.toUpperCase()}
              </p>
              <p>
                <i class="bi bi-line" style={{ color: "#333" }}></i> LINE :{" "}
                {
                  subcontract.subcontract.subcontract.subcontractCreatorId
                    .lineid
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubcontract;
