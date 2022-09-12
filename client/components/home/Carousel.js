import Link from "next/link";
import React from "react";

const Carousel = () => {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              style={{ width: "100%", height: "600px", objectFit: "full  " }}
            />
          </div>

          <div class="carousel-caption">
            <div class="position-absolute bottom-0 start-0 mb-5 " style={{}}>
              <h2 class="text-start ms-2">หาฟรีแลนซ์ หางานฟรีแลนซ์ </h2>
              <h4 class="text-start ms-2">สมัครใช้งานฟรี ไม่มีค่าใช้จ่าย</h4>
              <p class="text-start ms-2">
                <span style={{ color: "wheat" }}>ฟรีแลนซ์</span>{" "}
                สร้างโปรไฟล์ฟรี! <br />
                บริษัท/ผู้ว่าจ้าง ลงประกาศรับสมัครงานฟรี!
                <br />
                ที่เดียวจบ ครบทั้งหางานและหาฟรีแลนซ์มาทำงาน
              </p>

              <p class="container text-center mx-auto">
                <div class="row">
                  <Link href="/subcontracts">
                    <button class="btn btn-secondary ms-0 me-2 col " href="#">
                      หาฟรีแลนซ์
                    </button>
                  </Link>
                  <Link href="/hirecontracts">
                    <button class="btn btn-secondary ms-0 me-2 col" href="#">
                      หางานฟรีแลนซ์
                    </button>
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
