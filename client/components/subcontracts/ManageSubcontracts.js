import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Me } from "../../apollo/queries";
import Router from "next/router";
import TaskSubcontractTable from "../profile/Task/TaskTable/TaskSubcontractTable";

const ManageSubcontracts = () => {
  const { data, loading, error } = useQuery(Me, { fetchPolicy: "no-cache" });
  if (loading) {
    return <p> loading... </p>;
  }
  if (error) {
    return <p> something went wrong</p>;
  }
  return (
    <>
      <div className="card">
        <div className="card-header text-center mt-1">จัดการงานที่รับทำ</div>
      </div>
      <div className="text-end">
        <button
          type="button"
          class="btn btn-warning ms-1 mt-1 me-3 "
          onClick={() => Router.push("/subcontracts/createsubcontract")}
        >
          <i class="bi bi-plus-circle-fill"></i> เพิ่มงานที่รับทำ
        </button>
      </div>
      <div class="container ">
        <div class="row">
          <TaskSubcontractTable />
        </div>
      </div>
    </>
  );
};

export default ManageSubcontracts;
