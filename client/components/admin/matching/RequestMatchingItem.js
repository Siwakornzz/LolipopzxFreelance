import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import moment from "moment";
const RequestMatchingItem = ({ requestItem }) => {
  const [currentItem, setCurrentItem] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItem(requestItem.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(requestItem.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  console.log(currentItem);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % requestItem.length;
    setItemOffset(newOffset);
  };
  return (
    <>


          {currentItem.map((v) => {
            return (
              <>
                <Link
                  key={v.id}
                  href="/admin/matching/[matchingId]"
                  as={`/admin/matching/${v.id}`}
                >
                  <div class="col-md-4">
                    <div
                      class="card  border-start-1 border border-2 border-end-1 border-top-1 border-bottom-1  border-primary  ms-5 mt-5 shadow "
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="https://media.istockphoto.com/vectors/mismatch-or-mistake-wrong-business-decision-or-failure-of-incorrect-vector-id1334408906?k=20&m=1334408906&s=612x612&w=0&h=nMe6eqQEPaaFp9mYZT6ZNR7rJHqJzBFXjga3hyPtT-k="
                        style={{
                          height: "150px",
                          maxWidth: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        class="card-img-top embed-responsive-item"
                        alt="..."
                      />
                      <div class="card-header">id : {v.id}</div>
                      <div class="card-body"></div>
                      <p> ประเภทของงาน : {v.typeofwork} </p>
                      <p> งบประมาณ : {v.budget} บาท </p>
                      <p> สถานะ : {v.status} </p>
                      <div class="card-footer mt-2 text-center">
                        <small class="text-muted">
                          ผู้สร้างคำร้อง : {v.hirecontractCreatorId.username}{" "}
                        </small>
                        <br />
                        <small class="text-muted">
                          สร้างเมื่อ :{" "}
                          {moment(v.createdAt).locale("th").format("LLLL")}
                        </small>
                      </div>
                    </div>

                    <p> </p>
                  </div>
                </Link>
              </>
            );
          })}
          <div class="container mt-5 mb-5 ">
            <div class="text-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel="ถัดไป"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=" ย้อนกลับ"
                renderOnZeroPageChange={null}
                containerClassName="pagination justify-content-center"
                pageLinkClassName="page-link"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                activeLinkClassName="active"
              ></ReactPaginate>
            </div>
          </div>
    
    </>
  );
};

export default RequestMatchingItem;
