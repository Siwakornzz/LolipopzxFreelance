import moment from "moment/moment";
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
        <p class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {" "}
          {subcontract.subcontract.subcontract.detail}
        </p>
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
        <p class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {subcontract.subcontract.subcontract.duration} วัน
        </p>
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
        <p class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {" "}
          {Number(
            subcontract.subcontract.subcontract.startbudget
          ).toLocaleString("en")}{" "}
          บาท
        </p>
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
        <p class="ms-4" style={{ fontFamily: "Athiti, sans-serif" }}>
          {subcontract.subcontract.subcontract.province}
        </p>

        <footer
          class="text-center"
          style={{
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          {" "}
          สร้างเมื่อ :{" "}
          {moment(subcontract.subcontract.subcontract.createdAt)
            .locale("th")
            .format("LLLL")}
        </footer>
      </div>
    </>
  );
};

export default SubcontractDetail;
