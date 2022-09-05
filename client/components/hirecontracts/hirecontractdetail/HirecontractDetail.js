import moment from 'moment';
import React from 'react'

const HirecontractDetail = (hirecontract) => {
    console.log(hirecontract);
  return (
    <>
      {/* headerdetail */}
      <div className="mb-3">
        <h3> {hirecontract.hirecontract.hirecontract.topic}</h3>
      </div>

      <div class="text-end">
        <span class="badge text-bg-primary ">
          {hirecontract.hirecontract.hirecontract.typeofwork}
        </span>
      </div>

      {/* detail */}
      <div className="mb-3">
        <label for="detail" className="form-label" style={{ color: "#0d6efd" }}>
          <i class="bi bi-info-circle-fill"></i> รายละเอียดงาน
        </label>
        <pre style={{ fontFamily: "Athiti, sans-serif" }}>
          {" "}
          {hirecontract.hirecontract.hirecontract.detail}
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
          {hirecontract.hirecontract.hirecontract.duration} วัน
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
            hirecontract.hirecontract.hirecontract.budget
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
          {hirecontract.hirecontract.hirecontract.province}
        </pre>
        <footer class="text-center" style={{backgroundColor:"#333", color:"#fff",borderRadius:"10px"}}> สร้างเมื่อ : {moment(hirecontract.hirecontract.hirecontract.createdAt).locale("th").format("LLLL")}</footer>
      </div>
    </>
  )
}

export default HirecontractDetail