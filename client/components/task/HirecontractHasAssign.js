import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Me } from "../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";

const HirecontractHasAssign = () => {
  const [hirecontractData, setHirecontractData] = useState([]);
  console.log(hirecontractData);
  const columns = [
    {
      name: "หัวข้อประกาศงานที่จ้างมา",
      selector: "hirecontract.topic",
      sortable: true,
      center: true,
    },
    {
      name: "ประเภทของงาน",
      selector: "hirecontract.typeofwork",
      sortable: true,
      center: true,
    },
    {
      name: "งบประมาณที่จ้าง",
      selector: "hirecontract.budget",
      sortable: true,
      center: true,
    },
    {
      name: "สถานะ",
      selector: "hirecontract.status",
      cell: (row) => (
        <>
          {row.hirecontract.status === "WAITING" && (
            <span class="badge text-bg-warning">
              {" "}
              {row.hirecontract.status}
            </span>
          )}
          {row.hirecontract.status === "กำลังรอการตอบรับจากผู้รับเหมาช่วง" && (
            <span class="badge text-bg-info"> {row.hirecontract.status}</span>
          )}
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "เมนู",
      cell: (row) => (
        <>
          <div class="row  ">
            <div class="col text-center ">
              <Link
                key={row.hirecontract.id}
                href="/hirecontracts/[hirecontractId]"
                as={`/hirecontracts/${row.hirecontract.id}`}
              >
                <button class="btn btn-secondary btn-sm w-100">รับงาน</button>
              </Link>
            </div>

            <div class="col text-center ">
              <Link
                key={row.hirecontract.id}
                href="/hirecontracts/[hirecontractId]"
                as={`/hirecontracts/${row.hirecontract.id}`}
              >
                <button class="btn btn-secondary btn-sm w-100">
                  ปฎิเสธงาน
                </button>
              </Link>
            </div>

            <div class="col text-center ">
              <Link
                key={row.hirecontract.id}
                href="/hirecontracts/[hirecontractId]"
                as={`/hirecontracts/${row.hirecontract.id}`}
              >
                <button class="btn btn-secondary btn-sm w-100">
                  ดูรายละเอียด
                </button>
              </Link>
            </div>
          </div>
        </>
      ),
      center: true,
    },
  ];

  const responseHirecontract = useQuery(Me, {
    onCompleted: (data) => {
      if (data) {
        setHirecontractData(data.user.task);
      }
    },
  });

  return (
    <div class="card">
      <div class="card-header text-center"> จัดการงานที่จ้างเข้ามา</div>

      <div class="card-body">
        <DataTableExtensions columns={columns} data={hirecontractData}>
          <DataTable
            pagination
            // selectableRows
            // selectableRowsHighlight
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </div>
  );
};

export default HirecontractHasAssign;
