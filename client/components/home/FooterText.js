import React from "react";

const FooterText = () => {
  return (
    // <div className="container marketing text-center">
    //   <hr className="featurette-divider" />

    //   <div className="row featurette">
    //     <div className="col-md-7">
    //       <h2 className="featurette-heading">
    //         Lolipopz{" "}
    //         <span className="text-muted">ที่หนึ่งแห่งฟรีแลนซ์คุณภาพ</span>
    //       </h2>
    //       <p className="lead">
    //         Lolipopz คือเว็บไซต์ที่รวบรวม ฟรีแลนซ์
    //         มืออาชีพจากหลากหลายสายงานไว้ในที่เดียวกัน ไม่ว่าจะเป็น
    //         งานออกแบบโลโก้ ทำแบนเนอร์โฆษณา เขียนบทความ แปลภาษา การตลาดออนไลน์
    //         พัฒนาเว็บไซต์ และงานอื่นๆ อีกกว่า 90 หมวดหมู่
    //         เพื่อตอบโจทย์ความต้องการที่หลากหลายของทั้งผู้ประกอบการและผู้ใช้งานทั่วไป
    //         ทีมงานของเราพัฒนา Lolipopz ขึ้นโดยเน้นความเรียบง่าย
    //         และความสะดวกรวดเร็วในการใช้งาน
    //         ด้วยแนวคิดที่จะสร้างสรรค์แพลทฟอร์มที่จะช่วยประหยัดเวลาให้กับทั้ง
    //         ฟรีแลนซ์ และลูกค้า อีกทั้งยังมุ่งมั่นที่จะสนับสนุนการสร้างธุรกิจใหม่
    //         และต่อยอดธุรกิจให้กับผู้ประกอบการทั้งรายใหญ่รายย่อย และยังช่วยเหลือ
    //         ฟรีแลนซ์ ให้หางานได้ง่าย สร้างรายได้ให้มากขึ้นและมั่นคง
    //         ตลอดจนยกระดับมาตรฐานฟรีแลนซ์ไทยให้มีคุณภาพที่ดีขึ้นอีกด้วย
    //       </p>
    //     </div>
    //     <div className="col-md-5">
    //       <img
    //         src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         width="400"
    //         height="500"
    //       />
    //     </div>
    //   </div>

    //   <hr className="featurette-divider" />

    //   <div className="row featurette">
    //     <div className="col-md-7 order-md-2">
    //       <p className="lead">
    //         ด้วยเหตุนี้ Lolipopz
    //         จึงทำหน้าที่เสมือนเป็นพื้นที่สื่อกลางออนไลน์ระหว่าง ฟรีแลนซ์
    //         และผู้ที่มีความต้องการจ้างงานให้มาเจอกันได้ทุกที่ทุกเวลา โดยที่
    //         ฟรีแลนซ์ จะใช้เว็บไซต์ Lolipopz เป็นพื้นที่ในการลงประกาศรับจ้างงาน
    //         ในขณะที่ลูกค้าก็สามารถเข้ามาค้นหางานของ ฟรีแลนซ์
    //         ที่ต้องการได้ในที่เดียวกัน
    //         อีกทั้งยังมีอิสระในการเลือกจ้างงานเป็นครั้งๆได้
    //         สามารถเปรียบเทียบราคาและคุณภาพผลงานของ ฟรีแลนซ์ ที่มีอยู่หลากหลาย
    //         เพื่อให้ตรงกับความต้องการมากที่สุดอีกด้วย นอกจากนี้
    //         ด้วยระบบการชำระเงินที่ปลอดภัยของ Lolipopz
    //         ยังช่วยรับประกันการส่งมอบงานที่ครบถ้วนถูกต้องให้กับฝั่งลูกค้า
    //         ด้วยการเป็นตัวกลางในการถือเงินระหว่างที่ ฟรีแลนซ์ กำลังทำงาน
    //         และในทางกลับกันก็ช่วยรับประกันการส่งมอบเงินค่าจ้างให้กับ ฟรีแลนซ์
    //         เมื่อทำงานสำเร็จและส่งมอบให้ลูกค้าด้วยเช่นกัน
    //       </p>
    //     </div>
    //     <div className="col-md-5 order-md-1">
    //       <img
    //         src="https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         width="400"
    //         height="500"
    //       />
    //     </div>
    //   </div>

    //   <hr className="featurette-divider" />

    //   <div className="row featurette">
    //     <div className="col-md-7">
    //       <p className="lead">
    //         ปัจจุบัน Lolipopz มี ฟรีแลนซ์ ที่ผ่านการคัดกรองคุณภาพแล้ว
    //         ให้บริการในหมวดหมู่งานที่ครอบคลุมความต้องการกว่า 9 หมวดหมู่
    //         ด้วยจำนวนงานที่หลากหลายมากกว่า 15,000 งาน
    //         ซึ่งคัดแยกตามทักษะความสามารถของ ฟรีแลนซ์
    //         เพื่อตอบโจทย์ความต้องการของลูกค้าอย่างครบวงจร
    //         ไม่ว่าจะเป็นเจ้าของกิจการ ธุรกิจ SME แม่ค้าออนไลน์
    //         หรือแม้แต่บุคคลทั่วไป
    //         ที่กำลังมองหางานระดับมืออาชีพในราคาที่จับต้องได้ การันตีคุณภาพโดย
    //         Lolipopz แหล่งรวม ฟรีแลนซ์
    //       </p>
    //     </div>
    //     <div className="col-md-5">
    //       <img
    //         src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //         width="400"
    //         height="500"
    //       />
    //     </div>
    //   </div>

    //   <hr className="featurette-divider" />
    // </div>
    <>
      {/* <div class="mb-3" style={{ backgroundColor: "#000", color: "#fff", height: "70px" }}>
        <br />
        <footer class="text-center  " style={{ fontSize: "16px" }}>
          Copyright © LOLIPOPZ Trademarks belong to their respective owners. All
          rights reserved.
        </footer>
      </div> */}
    </>
  );
};

export default FooterText;
