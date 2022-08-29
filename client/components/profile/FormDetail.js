import React, { useContext, useState } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import InputAddress from "react-thailand-address-autocomplete";

const FormDetail = () => {
  const { user } = useContext(AuthContext);
  const [fullAddress, setFulladdDress] = useState({});

  console.log(fullAddress);
  const onChange = (e) => {
    setFulladdDress({
      ...fullAddress,
      [e.target.name]: e.target.value,
    });
  };

  const onSelect = (fullAddress) => {
    setFulladdDress(fullAddress);
  };

  return (
    <form class="row g-3 ms-3 me-3 mt-1 mb-4">
      {/* ชื่อจริง */}
      <div class="col-md-6">
        <label for="firstname" class="form-label">
          ชื่อ
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person-fill"></i>
          </span>
          <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="ชื่อ"
            defaultValue={user.firstname}
          />
        </div>
      </div>

      {/* นามสกุล */}

      <div class="col-md-6">
        <label for="lastname" class="form-label">
          นามสกุล
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-person-fill"></i>
          </span>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="นามสกุล"
            defaultValue={user.lastname}
          />
        </div>
      </div>

      <hr />

      <h5>ข้อมูลติดต่อ </h5>
      <div class="col-md-6">
        <label for="tel" class="form-label">
          เบอร์โทรศัพท์
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-telephone-fill"></i>
          </span>
          <input
            type="tel"
            class="form-control"
            id="tel"
            pattern="[0]{1}[0-9]{9}"
            placeholder="08x-xxx-xxxx"

            // defaultValue={user.lastname}
          />
        </div>
      </div>
      <div class="col-md-6">
        <label for="lineid" class="form-label">
          LINE ID
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-line"></i>
          </span>
          <input
            type="text"
            class="form-control"
            id="lineid"
            placeholder="LINE ID"

            // defaultValue={user.lastname}
          />
        </div>
      </div>

      <hr />

      <h5> ที่อยู่ </h5>
      <div class="col-md-6">
        <label for="subdistrict" class="form-label">
          แขวง / ตำบล
        </label>
        <div class="input-group">
          <span class="input-group-text">
            <i class="bi bi-house-door-fill"></i>
          </span>
          {/* <input
            type="text"
            class="form-control"
            id="subdistrict"
            placeholder=" แขวง / ตำบล"

            // defaultValue={user.lastname}
          /> */}
          แขวง / ตำบล
          <InputAddress
            address="subdistrict"
            value={fullAddress.subdistrict}
            onChange={onChange}
            onSelect={onSelect}
          />
        </div>
      </div>

      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default FormDetail;
