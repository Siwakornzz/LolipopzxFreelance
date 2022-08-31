import { useMutation } from "@apollo/react-hooks";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import Router from "next/router";
import { AuthContext } from "../../appstate/AuthProvider";
import { SIGN_IN } from "../../apollo/mutations";
import Link from "next/link";
import Swal from "sweetalert2";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const { setAuthUser } = useContext(AuthContext);

  const [signin, { loading, error }] = useMutation(SIGN_IN, {
    variables: { ...userInfo },
    onCompleted: (data) => {
      if (data) {
        // console.log(data.signin)
        setAuthUser(data.signin.user);
        Cookies.set("jwt", data.signin.jwt);
        setUserInfo({
          email: "",
          password: "",
        });
        if (data.signin.user.roles === "Admin") {
          Router.push("/admin");
        } else if (data.signin.user.roles === "User") {
          // push user after logged in to profile page
          Router.push("/profile");
        } else {
          Router.push("/");
        }
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
      await signin();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "LOLIPOPZ",
        text: error.graphQLErrors[0].message,
      });
      console.log(error);
    }
  };

  return (
    <>
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
                <h3> เข้าสู่ระบบ </h3>
                <label>สำหรับสมาชิกฟรีแลนซ์ / และผู้ว่าจ้าง</label>
              </div>

              <form onSubmit={handleSubmit}>
                {error && (
                  <div class="alert alert-danger text-center" role="alert">
                    <p>{error.graphQLErrors[0].message}</p>
                  </div>
                )}
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    <i class="bi bi-envelope-fill"></i> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="username@hotmail.com"
                    value={userInfo.email}
                    onChange={handleChange}
                    required
                    className="form-control form-control-lg"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example23">
                    <i class="bi bi-lock-fill"></i> รหัสผ่าน
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    value={userInfo.password}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    required
                  />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      บันทึกการใช้งานของฉัน{" "}
                    </label>
                  </div>
                  <a
                    href="/signin/requestresetpassword"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={() => Router.push("/signin/requestresetpassword")}
                  >
                    <i class="bi bi-key-fill"></i> ลืมรหัสผ่าน ?
                  </a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 btn-block"
                  disabled={loading}
                >
                  เข้าสู่ระบบ
                </button>
                <hr />
                <div class="mt-2">
                  <a>
                    ยังไม่มีบัญชี ?
                    <Link href="/signup">
                      <span style={{ color: "#0d6efd", cursor: "pointer" }}>
                        {" "}
                        <i class="bi bi-person-fill"></i> สมัครสมาชิก
                      </span>
                    </Link>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
