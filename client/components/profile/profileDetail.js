import React, { useContext } from "react";
import { AuthContext } from "../../appstate/AuthProvider";

const profileDetail = () => {
  const { user } = useContext(AuthContext);

  return (
    <div class="col-4 mt-5 text-center">
      <div class="">
        <div class="card-body">
          <img
            src="https://avatarfiles.alphacoders.com/154/154729.jpg"
            class="rounded-circle"
            alt="Avatar"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />

          <h4 class="mt-3">{user.username}</h4>
          <div class="text-start ms-5">
            <b>
              <p> ทีม : </p>
              <p> เกี่ยวกับ : </p>
              <p> ที่อยู่ : </p>
              <p> จังหวัด : </p>
              <br />
              <p>ข้อมูลติดต่อ</p>
              <p>เบอร์</p>
              <p>อีเมล์ : {user.email.toUpperCase()}</p>
              <p>line</p>
            </b>
          </div>
          <button class="btn btn-secondary w-50 btn-sm mt-4 "> แก้ไขโปรไฟล์ </button>
        </div>
      </div>
    </div>
  );
};

export default profileDetail;
