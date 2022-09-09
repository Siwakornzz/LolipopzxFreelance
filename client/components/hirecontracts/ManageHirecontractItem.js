import { useMutation, useQuery } from "@apollo/client";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { UPDATE_HIRECONTRACT } from "../../apollo/mutations";
import { Me, QUERY_HIRECONTRACT } from "../../apollo/queries";

const ManageHirecontractItem = () => {
  const route = useRouter();
  const [hirecontractData, setHirecontractData] = useState({});
  const [hirecontract, setHirecontract] = useState({});

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.managehirecontractId },
    onCompleted: (data) => {
      setHirecontractData(data.hirecontract);
      setHirecontract(data.hirecontract);
    },
  });

  const [updateHirecontract] = useMutation(UPDATE_HIRECONTRACT, {
    onCompleted: (data) => {
      setHirecontractData(data.updateHirecontract);
    },
    refetchQueries: [{ query: QUERY_HIRECONTRACT }, { query: Me }],
  });

  const handleChange = (e) =>
    setHirecontractData({
      ...hirecontractData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    if (hirecontractData === hirecontract) {
      setHirecontractData(hirecontract);

      Swal.fire({
        icon: "info",
        title: "LOLIPOPZ",
        text: "ไม่มีอะไรเปลี่ยนแปลง",
      });
      return;
    }
    try {
      e.preventDefault();
      await updateHirecontract({
        variables: {
          ...hirecontractData,
          budget: +hirecontractData.budget,
          duration: +hirecontractData.duration,
        },
      });
      Swal.fire({
        icon: "success",
        title: "LOLIPOPZ",
        text: "อัพเดทคำร้องการจ้างสำเร็จแล้ว",
      });
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p> loading...</p>;
  }

  if (error) {
    return <p> something went wrong</p>;
  }

  return (
    <>
      <div class="container">
        <div class="col-md-8 mt-4 mt-2 ms-5 ms-5 mb-3">
          <form onSubmit={handleSubmit}>
            {/* headerdetail */}
            <div className="mb-3">
              <label for="topic" className="form-label">
                หัวข้อประกาศงาน
                <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="topic"
                name="topic"
                defaultValue={hirecontractData.topic}
                onChange={handleChange}
                placeholder="หัวข้อประกาศงาน"
                required
              />
            </div>
            {/* typeofwork */}
            <div className="mb-3">
              <label for="typeofwork" className="form-label">
                ประเภทของงานที่จ้าง
                <span style={{ color: "red" }}> *</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="typeofwork"
                name="typeofwork"
                value={hirecontractData.typeofwork}
                onChange={handleChange}
                required
              >
                <option value="">--- ประเภทของงาน ---</option>
                <option value="Web Development">Web Development</option>
                <option value="WORDPRESS">WORDPRESS</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="UX/UI Design for Web & App">
                  UX/UI Design for Web & App
                </option>
                <option value="IT Solution">IT Solution</option>
                <option value="Desktop Application">Desktop Application</option>
                <option value="Chatbot">Chatbot</option>
                <option value="Website Scraping">Website Scraping</option>
              </select>
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
                defaultValue={hirecontractData.detail}
                onChange={handleChange}
                rows="3"
                placeholder="รายละเอียดงาน"
              ></textarea>
            </div>

            {/* ระยะเวลาในการทำงาน */}
            <div className="mb-3">
              <label for="duration" className="form-label">
                ระยะเวลาในการทำงาน ( วัน )
                <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="duration"
                name="duration"
                defaultValue={hirecontractData.duration}
                onChange={handleChange}
                placeholder="เช่น 7-14 วัน"
                required
              />
            </div>
            {/* งบประมาณเริ่มต้น */}
            <div className="mb-3">
              <label for="budget" className="form-label">
                งบประมาณ
                <span style={{ color: "red" }}> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="budget"
                name="budget"
                defaultValue={hirecontractData.budget}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </div>

            {/* จังหวัด */}
            <div className="mb-3">
              <label for="province" className="form-label">
                จังหวัด
                <span style={{ color: "red" }}> *</span>
              </label>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="province"
                name="province"
                value={hirecontractData.province}
                onChange={handleChange}
                required
              >
                <option value="" selected>
                  --------- เลือกจังหวัด ---------
                </option>
                <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                <option value="กระบี่">กระบี่ </option>
                <option value="กาญจนบุรี">กาญจนบุรี </option>
                <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
                <option value="กำแพงเพชร">กำแพงเพชร </option>
                <option value="ขอนแก่น">ขอนแก่น</option>
                <option value="จันทบุรี">จันทบุรี</option>
                <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
                <option value="ชัยนาท">ชัยนาท </option>
                <option value="ชัยภูมิ">ชัยภูมิ </option>
                <option value="ชุมพร">ชุมพร </option>
                <option value="ชลบุรี">ชลบุรี </option>
                <option value="เชียงใหม่">เชียงใหม่ </option>
                <option value="เชียงราย">เชียงราย </option>
                <option value="ตรัง">ตรัง </option>
                <option value="ตราด">ตราด </option>
                <option value="ตาก">ตาก </option>
                <option value="นครนายก">นครนายก </option>
                <option value="นครปฐม">นครปฐม </option>
                <option value="นครพนม">นครพนม </option>
                <option value="นครราชสีมา">นครราชสีมา </option>
                <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
                <option value="นครสวรรค์">นครสวรรค์ </option>
                <option value="นราธิวาส">นราธิวาส </option>
                <option value="น่าน">น่าน </option>
                <option value="นนทบุรี">นนทบุรี </option>
                <option value="บึงกาฬ">บึงกาฬ</option>
                <option value="บุรีรัมย์">บุรีรัมย์</option>
                <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
                <option value="ปทุมธานี">ปทุมธานี </option>
                <option value="ปราจีนบุรี">ปราจีนบุรี </option>
                <option value="ปัตตานี">ปัตตานี </option>
                <option value="พะเยา">พะเยา </option>
                <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
                <option value="พังงา">พังงา </option>
                <option value="พิจิตร">พิจิตร </option>
                <option value="พิษณุโลก">พิษณุโลก </option>
                <option value="เพชรบุรี">เพชรบุรี </option>
                <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
                <option value="แพร่">แพร่ </option>
                <option value="พัทลุง">พัทลุง </option>
                <option value="ภูเก็ต">ภูเก็ต </option>
                <option value="มหาสารคาม">มหาสารคาม </option>
                <option value="มุกดาหาร">มุกดาหาร </option>
                <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
                <option value="ยโสธร">ยโสธร </option>
                <option value="ยะลา">ยะลา </option>
                <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
                <option value="ระนอง">ระนอง </option>
                <option value="ระยอง">ระยอง </option>
                <option value="ราชบุรี">ราชบุรี</option>
                <option value="ลพบุรี">ลพบุรี </option>
                <option value="ลำปาง">ลำปาง </option>
                <option value="ลำพูน">ลำพูน </option>
                <option value="เลย">เลย </option>
                <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                <option value="สกลนคร">สกลนคร</option>
                <option value="สงขลา">สงขลา </option>
                <option value="สมุทรสาคร">สมุทรสาคร </option>
                <option value="สมุทรปราการ">สมุทรปราการ </option>
                <option value="สมุทรสงคราม">สมุทรสงคราม </option>
                <option value="สระแก้ว">สระแก้ว </option>
                <option value="สระบุรี">สระบุรี </option>
                <option value="สิงห์บุรี">สิงห์บุรี </option>
                <option value="สุโขทัย">สุโขทัย </option>
                <option value="สุพรรณบุรี">สุพรรณบุรี </option>
                <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
                <option value="สุรินทร์">สุรินทร์ </option>
                <option value="สตูล">สตูล </option>
                <option value="หนองคาย">หนองคาย </option>
                <option value="หนองบัวลำภู">หนองบัวลำภู </option>
                <option value="อำนาจเจริญ">อำนาจเจริญ </option>
                <option value="อุดรธานี">อุดรธานี </option>
                <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
                <option value="อุทัยธานี">อุทัยธานี </option>
                <option value="อุบลราชธานี">อุบลราชธานี</option>
                <option value="อ่างทอง">อ่างทอง </option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>
            {/* button */}
            <div className="text-end">
              <button
                type="submit"
                className="btn btn-secondary w-25 text-center mt-3"
              >
                {" "}
                <i className="bi bi-send-fill"></i> แก้ไขข้อมูล
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageHirecontractItem;
