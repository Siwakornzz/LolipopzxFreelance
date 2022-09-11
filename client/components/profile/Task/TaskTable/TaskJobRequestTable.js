import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Me } from "../../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";

const TaskJobRequestTable = () => {
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
          <div class="col text-center">
            <Link
              key={row.hirecontract.id}
              href="/hirecontracts/[hirecontractId]"
              as={`/hirecontracts/${row.hirecontract.id}`}
            >
              <button class="btn btn-secondary btn-sm">ดูรายละเอียด</button>
            </Link>
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
    <DataTableExtensions columns={columns} data={hirecontractData}>
      <DataTable
        pagination
        // selectableRows
        // selectableRowsHighlight
        highlightOnHover
      />
    </DataTableExtensions>
  );
};

export default TaskJobRequestTable;
