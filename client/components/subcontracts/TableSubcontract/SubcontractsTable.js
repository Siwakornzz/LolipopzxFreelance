import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTS } from "../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

const SubcontractsTable = () => {
  const { data, loading, error } = useQuery(QUERY_SUBCONTRACTS, {});
  console.log(data);

  if (loading) {
    return <p> Loading....</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      {data.subcontracts.map((v) => (
        <>
          <div class="col-md-4 mt-2" key={v.id}>
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
                    <small> ผู้สร้าง : {v.subcontractCreatorId.username}</small>
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
          </div>
        </>
      ))}
    </>
  );
};

export default SubcontractsTable;
