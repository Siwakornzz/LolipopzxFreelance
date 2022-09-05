import React from "react";

const ProfileHirecontract = (hirecontract) => {
  return (
    <div class="card mt-4" style={{ border: "2px solid #0d6efd" }}>
      <div class=" text-center">
        <div class="">
          <div class="card-body mt-5">
            <img
              src="https://i.gifer.com/1F4J.gif"
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
                  hirecontract.hirecontract.hirecontract.hirecontractCreatorId
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
                {
                  hirecontract.hirecontract.hirecontract.hirecontractCreatorId
                    .tel
                }
              </p>
              <p>
                <i class="bi bi-envelope-fill" style={{ color: "#333" }}></i>{" "}
                อีเมล์ :{" "}
                {hirecontract.hirecontract.hirecontract.hirecontractCreatorId.email.toUpperCase()}
              </p>
              <p>
                <i class="bi bi-line" style={{ color: "#333" }}></i> LINE :{" "}
                {
                  hirecontract.hirecontract.hirecontract.hirecontractCreatorId
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

export default ProfileHirecontract;
