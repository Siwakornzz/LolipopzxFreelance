import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { QUERY_SUBCONTRACTS } from "../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const HirecontrctTable = ({ categorydata }) => {
  console.log("categorydata", categorydata);
  const [currentItem, setCurrentItem] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItem(categorydata.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(categorydata.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  console.log(currentItem);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % categorydata.length;
    setItemOffset(newOffset);
  };
  return (
    <>

          {currentItem.map((v) => {
            return (
              <>
                <style>
                  {`
      #hirecontract{
        transform: scale(0.8);
      }
      #hirecontract:hover{
      
        transform: scale(0.9);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
  `}
                </style>
                <>
                  <div
                    class="col-md-3 mt-2 "
                    id="hirecontract"
                    key={v.id}
                    style={{ cursor: "pointer" }}
                  >
                    <Link
                      key={v.id}
                      href="/hirecontracts/[hirecontractId]"
                      as={`/hirecontracts/${v.id}`}
                    >
                      <div
                        class="card "
                        style={{ width: "22rem", height: "auto" }}
                      >
                        <div class="card-header text-center ">{v.topic}</div>
                        <img
                          src="https://c.tenor.com/hwjqo-O16cUAAAAM/vaporwave.gif"
                          class="card-img-top "
                          alt={v.topic}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "200px",
                          }}
                        />
                        <br />
                        <div class="card-body mt-1 ms-1 me-1 mb-1">
                          <b>
                            {" "}
                            <p> รายละเอียด :</p>
                          </b>
                          <p
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.detail}
                          </p>
                          <div class="text-end mt-1">
                            <span class="badge text-bg-primary ">
                              {v.typeofwork}
                            </span>
                          </div>
                        </div>
                        <div class="card-footer text-center text-muted">
                          <div class="row">
                            <div class="col">
                              <small>
                                {" "}
                                ผู้สร้าง : {v.hirecontractCreatorId.username}
                              </small>
                            </div>
                            <div class="col">
                              <small>
                                {" "}
                                งบประมาณ :{" "}
                                {Number(v.budget).toLocaleString("en")} บาท
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
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

export default HirecontrctTable;
