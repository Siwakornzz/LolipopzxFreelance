import React from "react";

const CarouselHirecontract = () => {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>

          <div class="carousel-caption">
            <div class="position-absolute bottom-0 start-0 mb-5 " style={{}}>
              <h2 class="text-start ms-2">หางานฟรีแลนซ์ ที่เดียวจบ !!! </h2>

              <p class="text-start ms-2">
                ค้นหางาน งานประจำ งานพาร์ทไทม์ สถานที่ฝึกงาน หลากหลายสาขา
                <br/>
                หลากหลายสายงาน ครบจบในที่เดียว LOLIPOPZ x Freelance
                <br />
                พร้อมจะช่วยทำให้ไอเดียของคุณเป็นจริง
   
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarouselHirecontract;
