import React from "react";

const SubcontractDetail = (subcontract) => {
  console.log(subcontract);
  return (
    <>
      {/* headerdetail */}
      <div className="mb-3">
        <h3> {subcontract.subcontract.subcontract.topic}</h3>
      </div>

      <div class="text-end">
        <span class="badge text-bg-primary ">
          {subcontract.subcontract.subcontract.typeofwork}
        </span>
      </div>

      {/* detail */}
      <div className="mb-3">
        <label for="detail" className="form-label" style={{ color: "#0d6efd" }}>
          <i class="bi bi-info-circle-fill"></i> รายละเอียดงาน
        </label>
        <pre style={{ fontFamily: "Athiti, sans-serif" }}>
          {" "}
          {subcontract.subcontract.subcontract.detail}
        </pre>
      </div>

      {/* ระยะเวลาในการทำงาน */}
      <div className="mb-3">
        <label
          for="duration"
          className="form-label"
          style={{ color: "#0d6efd" }}
        >
          <i class="bi bi-calendar-check-fill"></i> ระยะเวลาในการทำงาน (วัน)
        </label>
        <pre class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {subcontract.subcontract.subcontract.duration} วัน
        </pre>
      </div>

      {/* งบประมาณเริ่มต้น */}
      <div className="mb-3">
        <label
          for="startbudget"
          className="form-label"
          style={{ color: "#0d6efd" }}
        >
          <i class="bi bi-cash-coin"></i> ค่าจ้างเริ่มต้น (บาท)
        </label>
        <pre class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {" "}
          {Number(
            subcontract.subcontract.subcontract.startbudget
          ).toLocaleString("en")}{" "}
          บาท
        </pre>
      </div>

      {/* จังหวัด */}
      <div className="mb-3">
        <label
          for="province"
          className="form-label"
          style={{ color: "#0d6efd" }}
        >
          <i class="bi bi-house-fill"></i> จังหวัด
        </label>
        <pre class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {subcontract.subcontract.subcontract.province}
        </pre>
      </div>
    </>
  );
};

export default SubcontractDetail;
