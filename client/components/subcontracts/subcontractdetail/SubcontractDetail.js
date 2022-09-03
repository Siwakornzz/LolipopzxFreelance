import React from "react";

const SubcontractDetail = (subcontract) => {
  console.log(subcontract);
  return (
    <>
      {/* headerdetail */}
      <div className="mb-3">
        <label for="topic" className="form-label">
          หัวข้อประกาศงาน
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          name="topic"
          className="form-control"
          id="topic"
          placeholder="หัวข้อประกาศงาน"
          defaultValue={subcontract.topic}
          readOnly
        />
      </div>
      {/* typeofwork */}
      <div className="mb-3">
        <label for="typeofwork" className="form-label">
          ประเภทของงานที่รับทำ
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          className="form-control"
          aria-label="form-control"
          id="typeofwork"
          name="typeofwork"
          defaultValue={subcontract.typeofwork}
          readOnly
        ></input>
      </div>
      {/* detail */}
      <div className="mb-3">
        <label for="detail" className="form-label">
          รายละเอียดงาน
        </label>
        <textarea
          className="form-control"
          id="detail"
          name="detail"
          rows="3"
          placeholder="รายละเอียดงาน"
          defaultValue={subcontract.detail}
          readOnly
          style={{ border: "none", outline: "none" }}
        ></textarea>
      </div>

      {/* ระยะเวลาในการทำงาน */}
      <div className="mb-3">
        <label for="duration" className="form-label">
          ระยะเวลาในการทำงาน
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="duration"
          name="duration"
          placeholder="เช่น 7-14 วัน"
          defaultValue={subcontract.duration}
          readOnly
        />
      </div>
      {/* งบประมาณเริ่มต้น */}
      <div className="mb-3">
        <label for="startbudget" className="form-label">
          ราคาเริ่มต้น/บาท
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="startbudget"
          name="startbudget"
          placeholder="0.00"
          defaultValue={subcontract.startbudget}
          readOnly
        />
      </div>

      {/* จังหวัด */}
      <div className="mb-3">
        <label for="province" className="form-label">
          จังหวัด
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          className="form-control"
          id="province"
          name="province"
          defaultValue={subcontract.province}
          readOnly
        ></input>
      </div>
    </>
  );
};

export default SubcontractDetail;
