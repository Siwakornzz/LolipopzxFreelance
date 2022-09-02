import { useMutation } from "@apollo/react-hooks";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { SIGN_UP } from "../../apollo/mutations";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    variables: { ...userInfo },

    onCompleted: (data) => {
      if (data) {
        setSuccess(true);
        setUserInfo({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
        });

        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: "สร้างบัญชีสำเร็จ",
        });
      }
      if (error) {
        console.log(error);
      }
    },
  });

  // e = element
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signup();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "LOLIPOPZ",
        text: error.graphQLErrors[0].message,
      });
    }
  };

  return (
    <section className="vh-100 mt-auto">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://img.freepik.com/premium-vector/linear-vaporwave-background_23-2148884183.jpg?w=2000"
              className="img-fluid rounded mx-auto d-block"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div class="text-center mb-3">
              <h3> สมัครสมาชิก </h3>
              <label>สำหรับสมาชิกฟรีแลนซ์ / และผู้ว่าจ้าง</label>
            </div>
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label">ชื่อ</label>
                    <input
                      type="text"
                      name="firstname"
                      class="form-control"
                      placeholder="ชื่อจริง"
                      value={userInfo.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label">นามสกุล</label>
                    <input
                      type="text"
                      name="lastname"
                      class="form-control"
                      placeholder="นามสกุล"
                      value={userInfo.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Username Input */}
              <div class="form-outline mb-4">
                <label class="form-label">ชื่อผู้ใช้งาน</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ชื่อผู้ใช้งาน"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="username@hotmail.com"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <label class="form-label">รหัสผ่าน</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="********"
                  name="password"
                  minLength={6}
                  value={userInfo.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-left mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  required
                />
                <label class="form-check-label">
                  ฉันได้อ่านและยอมรับ{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    ข้อตกลงและเงื่อนไขการใช้งานของ LOLIPOPZ{" "}
                    <span style={{ color: "red" }}>*</span>
                  </a>
                </label>
              </div>

              <div class="form-check d-flex justify-content-left mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  required
                />
                <label class="form-check-label">
                  ฉันได้อ่านและยอมรับ{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    นโยบายคุ้มครองความเป็นส่วนตัว
                  </a>{" "}
                  <span style={{ color: "red" }}> * </span>
                </label>
              </div>
              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary w-100 btn-block"
                disabled={loading}
              >
                ลงทะเบียน
              </button>
              <div class="mt-3">
                <a>
                  มีบัญชีสมาชิกอยู่แล้ว ? &nbsp; &nbsp;
                  <Link href="/signin">
                    <span style={{ color: "#0d6efd", cursor: "pointer" }}>
                      <i class="bi bi-person-fill"></i> เข้าสู่ระบบ
                    </span>
                  </Link>
                </a>
              </div>

              {error && <p>{error.graphQLErrors[0].message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
