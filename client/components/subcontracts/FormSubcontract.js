import React from "react";

const FormSubcontract = () => {
  return (
    <form>
      {/* headerdetail */}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          หัวข้อประกาศงาน
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="หัวข้อประกาศงาน"
          required
        />
      </div>
      {/* typeofwork */}
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">
          ประเภทของงานที่รับทำ
          <span style={{ color: "red" }}> *</span>
        </label>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="exampleFormControlInput2"
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
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          รายละเอียดงาน
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="รายละเอียดงาน"
        ></textarea>
      </div>

      {/* ระยะเวลาในการทำงาน */}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          ระยะเวลาในการทำงาน
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="เช่น 7-14 วัน"
          required
        />
      </div>
      {/* งบประมาณเริ่มต้น */}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          ราคาเริ่มต้น/บาท
          <span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="0.00"
          required
        />
      </div>

      {/* จังหวัด */}
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">
          จังหวัด
          <span style={{ color: "red" }}> *</span>
        </label>
        <select
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="exampleFormControlInput2"
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
      <div class="text-end">
        <button type="submit" class="btn btn-secondary w-25 text-center mt-3">
          {" "}
          <i class="bi bi-send-fill"></i> ส่งข้อมูล
        </button>
      </div>
    </form>
  );
};

export default FormSubcontract;
