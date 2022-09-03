import React, { useState } from "react";

const ProfileSubcontract = (subcontract) => {
  return (
    // <>
    // </>
    <div class="card mt-3" style={{border: "4px solid gray"}}>
      <div class=" text-center">
        <div class="">
          <div class="card-body mt-5">
            <img
              src="https://i.pinimg.com/originals/8b/31/30/8b3130a92309488aa89d9fe4effc7a3e.gif"
              class="rounded-circle"
              alt="Avatar"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                border: "3px #333 solid",
              }}
            />

            <h4 class="mt-5">
              {
                subcontract.subcontract.subcontract.subcontractCreatorId
                  .username
              }
            </h4>
            <div class=" text-start mt-5 ms-3 mb-5">
              <b>
                <p> ทีม : </p>
                <p> เกี่ยวกับ : </p>
                <p>
                  {" "}
                  ที่อยู่ :{" "}
                  <span class="ms-2">
                    {" "}
                    {/* อำเภอ {subcontract.subcontract.district} &nbsp;ตำบล {subcontract.subcontract.subdistrict} <br /> */}
                  </span>
                  {/* <span class="ms-5">รหัสไปรษณีย์ {subcontract.subcontract.zipcode}</span> */}
                </p>
                {/* <p> จังหวัด : {subcontract.subcontract.province} </p> */}
                <hr />
                <p>ข้อมูลติดต่อ</p>

                <p>
                  <i class="bi bi-telephone-fill" style={{ color: "#333" }}></i>{" "}
                  {/* เบอร์โทรศัพท์ : {subcontract.subcontract.tel} */}
                </p>
                <p>
                  <i class="bi bi-envelope-fill" style={{ color: "#333" }}></i>{" "}
                  {/* อีเมล์ : {subcontract.subcontract.email.toUpperCase()} */}
                </p>
                <p>
                  <i class="bi bi-line" style={{ color: "#333" }}></i> LINE :{" "}
                  {/* {subcontract.subcontract.lineid} */}
                </p>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSubcontract;
