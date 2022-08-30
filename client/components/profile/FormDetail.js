import React, { useContext, useState } from "react";

import InputAddress from "react-thailand-address-autocomplete";
import { UPDATE_USER } from "../../apollo/mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Me } from "../../apollo/queries";
import Swal from "sweetalert2";
import Router from "next/router";
import { AuthContext } from "../../appstate/AuthProvider";

const ProfileFormDetail = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  const [userData, setUserData] = useState(user);

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    oncompleted: (data) => {
      console.log(data);
      setUserData(data.updateduserprofile);
    },
    refetchQueries: [{ query: Me }],
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    if (userData === user) {
      setUserData(user);
      Swal.fire({
        icon: "info",
        title: "LOLIPOPZ",
        text: "ไม่มีอะไรเปลี่ยนแปลง",
        timer: 3000,
      }).then(() => Router.reload());
      return;
    }
    try {
      e.preventDefault();
      await updateUser({
        variables: {
          ...userData,
        },
      });
      Swal.fire({
        icon: "success",
        title: "LOLIPOPZ",
        text: "อัพเดทข้อมูลส่วนตัวสำเร็จ",
        timer: 3000,
      }).then(() => Router.reload());
    } catch (error) {
      console.log(error);
    }
  };
  const onSelect = (fulladdress) => {
    setUserData({ ...userData, ...fulladdress });
  };

  return (
    // <></>
    <form className="row g-3 ms-3 me-3 mt-1 mb-4">
      {/* ชื่อจริง */}
      <div className="col-md-6">
        <label htmlFor="firstname" className="form-label">
          ชื่อ
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person-fill"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            placeholder="ชื่อ"
            value={userData.firstname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* นามสกุล */}

      <div className="col-md-6">
        <label htmlFor="lastname" className="form-label">
          นามสกุล
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person-fill"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            placeholder="นามสกุล"
            value={userData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <hr />

      <h5>ข้อมูลติดต่อ </h5>
      <div className="col-md-6">
        <label htmlFor="tel" className="form-label">
          เบอร์โทรศัพท์
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-telephone-fill"></i>
          </span>
          <input
            type="tel"
            className="form-control"
            id="tel"
            name="tel"
            pattern="[0]{1}[0-9]{9}"
            placeholder="08x-xxx-xxxx"
            value={userData.tel}
            onChange={handleChange}
            required

            // value={user.lastname}
          />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="lineid" className="form-label">
          LINE ID
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-line"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="lineid"
            name="lineid"
            placeholder="LINE ID"
            value={userData.lineid}
            onChange={handleChange}
            required

            // value={user.lastname}
          />
        </div>
      </div>

      <hr />

      <h5> ที่อยู่ </h5>
      <div className="col-md-6">
        <label htmlFor="subdistrict" className="form-label">
          แขวง / ตำบล
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-house-door-fill"></i>
          </span>

          <InputAddress
            address="subdistrict"
            value={userData.subdistrict}
            onChange={handleChange}
            onSelect={onSelect}
            placeholder="แขวง / ตำบล"
            style={{
              display: "block",
              width: "100%",
              height: "40px",
            }}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="district" className="form-label">
          เขต/อำเภอ
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-house-door-fill"></i>
          </span>

          <InputAddress
            address="district"
            value={userData.district}
            onChange={handleChange}
            onSelect={onSelect}
            placeholder="เขต / อำเภอ"
            style={{
              display: "block",
              width: "100%",
              height: "40px",
            }}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="province" className="form-label">
          จังหวัด
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-house-door-fill"></i>
          </span>

          <InputAddress
            address="province"
            value={userData.province}
            onChange={handleChange}
            onSelect={onSelect}
            placeholder="จังหวัด"
            style={{
              display: "block",
              width: "100%",
              height: "40px",
            }}
            required
          />
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="zipcode" className="form-label">
          รหัสไปรษณีย์
        </label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-house-door-fill"></i>
          </span>

          <InputAddress
            address="zipcode"
            value={userData.zipcode}
            onChange={handleChange}
            onSelect={onSelect}
            placeholder="รหัสไปรษณีย์"
            required
            style={{
              display: "block",
              width: "100%",
              height: "40px",
            }}
          />
        </div>
      </div>

      <div className="col-12 text-center mt-5">
        <button
          className="btn btn-secondary w-50 "
          type="submit"
          onClick={handleSubmit}
        >
          <i className="bi bi-pencil-square"></i> บันทึกข้อมูล
        </button>
      </div>
    </form>
  );
};

export default ProfileFormDetail;
