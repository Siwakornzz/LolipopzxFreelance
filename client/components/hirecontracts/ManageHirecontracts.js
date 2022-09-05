import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Me } from "../../apollo/queries";
import Router from "next/router";
import TaskHirecontractTable from "../profile/Task/TaskTable/TaskHirecontractTable";

const Managehirecontracts = () => {
  const { data, loading, error } = useQuery(Me, { fetchPolicy: "no-cache" });
  if (loading) {
    return <p> Loading... </p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <div className="card">
        <div className="card-header text-center mt-1">
          จัดการคำร้องขอการจ้างงาน
        </div>
      </div>
      <div className="text-end">
        <button
          type="button"
          class="btn btn-warning ms-1 mt-2 mb-2 me-3 "
          onClick={() => Router.push("/hirecontracts/createhirecontract")}
        >
          <i class="bi bi-plus-circle-fill"></i> สร้างคำร้องขอการจ้างงาน
        </button>
      </div>
      <div class="container">
        <div class="row">
          <TaskHirecontractTable />
        </div>
      </div>
    </>
  );
};

export default Managehirecontracts;
