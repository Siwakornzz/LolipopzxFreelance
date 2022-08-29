import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { RESETPASSWORD } from "../../apollo/mutations";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [resetpassword, { loading, error }] = useMutation(RESETPASSWORD, {
    variables: { password, token: router && router.query.resetToken },
    onCompleted: (data) => {
      if (data) {
        setMessage(data.resetpassword.message);
        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: data.resetpassword.message,
        });
      }
    },
  });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await resetpassword();
    } catch (error) {
      Swal.fire({
        icon: "success",
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
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}

              <div className="form-outline mb-4">
                <h3 className="text-center"> สร้างรหัสผ่านใหม่</h3>
                <label className="form-label" for="form1Example13">
                  รหัสผ่านใหม่
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  onChange={handleChange}
                  required
                  className="form-control form-control-lg"
                />
                <div class="text-start ms-2 mt-3" style={{ color: "gray" }}>
                  <span style={{ color: "red" }}>ข้อแนะนำ: </span>{" "}
                  รหัสผ่านควรจะมีอย่างน้อยสิบสองตัวอักขระ
                  โดยเพื่อทำให้มันปลอดภัยยิ่งขึ้น
                  ให้ใช้ตัวอักษรตัวเล็กและตัวใหญ่ ตัวเลข และสัญลักษณ์อย่าง ! " ?
                  $ % ^ & )
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="btn btn-primary w-100 btn-block"
                disabled={loading}
              >
                เปลี่ยนรหัสผ่าน
              </button>
              <div className="mt-2 ">
                {message && (
                  <>
                    <div
                      class="alert alert-danger d-flex align-items-center"
                      role="alert"
                    >
                      <div class="text-center">{message}</div>
                    </div>
                  </>
                )}
                {error && (
                  <>
                    <div
                      class="alert alert-danger d-flex align-items-center"
                      role="alert"
                    >
                       <div class="text-center">{error.graphQLErrors[0].message}</div>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
