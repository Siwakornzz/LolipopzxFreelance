import React from "react";

const CarouselSubcontract = () => {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://wallpaperaccess.com/full/2747472.jpg"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </div>

          <div class="carousel-caption">
            <div class="position-absolute bottom-0 start-0 mb-5 " style={{}}>
              <h2 class="text-start ms-2">หาฟรีแลนซ์ มืออาชีพ มาทำงาน </h2>

              <p class="text-start ms-2">
                ค้นหาฟรีแลนซ์ หลากหลายสาขาอาชีพ หลากหลายสายงาน
                <br />
                พร้อมจะช่วยทำให้ไอเดียของคุณเป็นจริง
                <br />
                เริ่มต้นค้นหาฟรีแลนซ์ที่คุณตามหากันเลย...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarouselSubcontract;
