import React, { useContext } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/router";

const profileDetail = () => {
  const { user } = useContext(AuthContext);
  const route = useRouter();
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
              <hr />
              <p>ข้อมูลติดต่อ</p>

              <p>
                <i class="bi bi-telephone-fill" style={{ color: "#333" }}></i>{" "}
                เบอร์โทรศัพท์ :
              </p>
              <p>
                <i class="bi bi-envelope-fill" style={{ color: "#333" }}></i>{" "}
                อีเมล์ : {user.email.toUpperCase()}
              </p>
              <p>
                <i class="bi bi-line" style={{ color: "#333" }}></i> LINE :
              </p>
            </b>
          </div>
          {route.asPath != "/profile/editprofile" && (
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
