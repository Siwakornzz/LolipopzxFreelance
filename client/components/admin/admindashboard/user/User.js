import React from "react";
import Link from "next/link";
import { QUERY_USERS } from "../../../../apollo/queries";
import { useQuery } from "@apollo/client";
const User = () => {
  const { data } = useQuery(QUERY_USERS, {});
  return (
    <div class="col">
      <div class="mt-3 container">
        <div class="card">
          <div class="card-header text-center">ข้อมูลของผู้ใช้งาน</div>
          <div class="row text-center">
            <div class="text-center mt-2">
              <img
                src="https://c1.alamy.com/thumbs/tcxt95/admin-icon-vector-male-user-person-profile-avatar-with-gear-cogwheel-for-settings-and-configuration-in-flat-color-glyph-pictogram-illustration-tcxt95.jpg "
                class="rounded-circle"
                width="140px"
                height="140px"
                style={{ objectFit: "cover", border: "2px solid #333" }}
              />

              <p class="mt-3"> ผู้ใช้งานทั้งหมด {data?.users.length} คน </p>
              <div class="text-center">
                <Link href="/admin/manageuser">
                  <button class="btn btn-primary w-50 mb-3">
                    {" "}
                    จัดการ ข้อมูลของผู้ใช้งาน
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
