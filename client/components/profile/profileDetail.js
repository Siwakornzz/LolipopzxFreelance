import React, { useContext, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../appstate/AuthProvider";

const profileDetail = () => {
  const { user } = useContext(AuthContext);
  const route = useRouter();
  return (
    // <></>
    <div class="col-4 mt-5 text-center">
      <div class="">
        <div class="card-body">
          <img
            src="https://i.gifer.com/1F4J.gif"
            class="rounded-circle"
            alt="Avatar"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              border: "3px #333 solid",
            }}
          />

          <h4 class="mt-3">{user.username}</h4>
          <div class="text-start ms-5">
            <b>
              <p> ทีม : </p>
              <p> เกี่ยวกับ : </p>
              <p>
                {" "}
                ที่อยู่ :{" "}
                <span class="ms-2">
                  {" "}
                  อำเภอ {user.district} &nbsp;ตำบล {user.subdistrict} <br />
                </span>
                <span class="ms-5">รหัสไปรษณีย์ {user.zipcode}</span>
              </p>
              <p> จังหวัด : {user.province} </p>
              <hr />
              <p>ข้อมูลติดต่อ</p>

              <p>
                <i class="bi bi-telephone-fill" style={{ color: "#333" }}></i>{" "}
                เบอร์โทรศัพท์ : {user.tel}
              </p>
              <p>
                <i class="bi bi-envelope-fill" style={{ color: "#333" }}></i>{" "}
                อีเมล์ : {user.email.toUpperCase()}
              </p>
              <p>
                <i class="bi bi-line" style={{ color: "#333" }}></i> LINE :{" "}
                {user.lineid}
              </p>
            </b>
          </div>
          {route.asPath == "/profile" && (
            <Link href="profile/editprofile">
              <button class="btn btn-secondary w-50 btn-sm mt-4 ">
                {" "}
                <i class="bi bi-pencil-square"></i> แก้ไขโปรไฟล์{" "}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default profileDetail;
