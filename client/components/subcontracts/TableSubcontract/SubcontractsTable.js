import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTS } from "../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import Link from "next/link";

const SubcontractsTable = () => {
  const { data, loading, error } = useQuery(QUERY_SUBCONTRACTS, {});

  if (loading) {
    return (
      <div class="text-center mx-auto mt-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <style>
        {`
        #subcontract{
          transform: scale(0.8);
        }
        #subcontract:hover{
        
          transform: scale(0.9);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `}
      </style>
      {data.subcontracts.map((v) => (
        <>
          <div
            class="col-md-3 mt-2 "
            id="subcontract"
            key={v.id}
            style={{ cursor: "pointer" }}
          >
            <Link
              key={v.id}
              href="/subcontracts/[subcontractId]"
              as={`/subcontracts/${v.id}`}
            >
              <div class="card " style={{ width: "22rem", height: "auto" }}>
                <div class="card-header text-center ">{v.topic}</div>
                <img
                  src="https://c.tenor.com/hwjqo-O16cUAAAAM/vaporwave.gif"
                  class="card-img-top "
                  alt={v.topic}
                  style={{ objectFit: "cover", width: "100%", height: "200px" }}
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
                    <span class="badge text-bg-primary ">{v.typeofwork}</span>
                  </div>
                </div>
                <div class="card-footer text-center text-muted">
                  <div class="row">
                    <div class="col">
                      <small>
                        {" "}
                        ผู้สร้าง : {v.subcontractCreatorId.username}
                      </small>
                    </div>
                    <div class="col">
                      <small>
                        {" "}
                        งบประมาณ : {Number(v.startbudget).toLocaleString(
                          "en"
                        )}{" "}
                        บาท
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};

export default SubcontractsTable;
