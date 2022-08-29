import React from "react";

const Category = () => {
  return (
    <>
      <style>
        {`
        
       
      `}
      </style>

      <div className="container marketing text-center">
        {/* <!-- Three columns of text below the carousel --> */}
        <div className="row mt-5">
          <span class="border border-primary border-0">
            {" "}
            <div class="text-start mb-3">
              <h3 class="border-start-1 border border-4 border-end-0 border-top-0 border-bottom-0  border-primary"> &nbsp; หมวดหมู่งาน</h3>
              <label>
                ค้นหางานตามหมวดหมู่งานยอดนิยม หรือค้นหาตามสายงานของคุณ ได้ที่นี่
              </label>
            </div>
          </span>
          <div className="col-sm-3">
            <img
              src="https://media.discordapp.net/attachments/691648892051390474/1004015212946542692/unknown.png"
              width="80"
              height="80"
            />

            <h5>Web Development </h5>
            <p>พัฒนาและออกแบบเว็บไซต์</p>
            <p>
              <a className="btn btn-secondary" href="category/webdevelopment">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>

          <div className="col-sm-3">
            <img
              src="https://www.coops.tech/images/technologies/wordpress.png"
              width="80"
              height="80"
            />

            <h5>WORDPRESS</h5>
            <p>สร้างเว็บไซต์สำเร็จรูปด้วย Wordpress</p>
            <p>
              <a className="btn btn-secondary" href="category/wordpress">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3616/3616049.png"
              width="80"
              height="80"
            />

            <h5>Mobile Application</h5>
            <p>สร้าง Application บน iOS และ Android</p>
            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/443/443538.png?w=360"
              width="80"
              height="80"
            />

            <h5>UX/UI Design for Web & App </h5>
            <p>ออกแบบหน้าตาเว็บไซต์</p>
            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://icon-library.com/images/it-icon/it-icon-3.jpg"
              width="80"
              height="80"
            />

            <h5>IT Solution และ Support</h5>
            <p>แก้ไขปัญหา ติดตั้งและวางระบบเซิฟเวอร์</p>
            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://www.nicepng.com/png/full/119-1192437_software-development-desktop-application-development-icon.png"
              width="80"
              height="80"
            />

            <h5>Desktop Application</h5>
            <p>เขียนโปรแกรมบน Windows</p>
            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3649/3649460.png"
              width="80"
              height="80"
            />

            <h5>Chatbot </h5>

            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          {/* <!-- /.col-sm-3 --> */}
          <div className="col-sm-3">
            <img
              src="https://uploads-ssl.webflow.com/5eb586cf7696a9c27238a7ed/6095431c47d094515c19ca88_Byteline-icon2.png"
              width="80"
              height="80"
            />

            <h5>Website Scraping </h5>

            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>
          {/* <!-- /.col-sm-3 --> */}
          <div className="col-sm-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6212/6212609.png"
              width="80"
              height="80"
            />

            <h5>ทำโปรเจค IoT</h5>

            <p>
              <a className="btn btn-secondary" href="#">
                ดูรายละเอียด &raquo;
              </a>
            </p>
          </div>

          {/* <!-- /.col-sm-3 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </>
  );
};

export default Category;
