import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import { Me } from "../../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
const TaskRequestTable = () => {
  const [hirecontractData, setHirecontractData] = useState([]);

  const columns = [
    {
      name: "หัวข้อประกาศงาน",
      selector: "topic",
      sortable: true,
      center: true,
    },
    {
      name: "ประเภทของงาน",
      selector: "typeofwork",
      sortable: true,
      center: true,
    },
    {
      name: "สถานะ",
      cell: (row) => (
        <>
          {row.status === "WAITING" && (
            <span class="badge text-bg-warning"> {row.status}</span>
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
          <div class="col">
            <Link
              key={row.id}
              href="/hirecontracts/[hirecontractId]"
              as={`/hirecontracts/${row.id}`}
            >
              <button class="btn btn-secondary btn-sm">ดูรายละเอียด</button>
            </Link>
          </div>
          <div class="col">
            <Link
              key={row.id}
              href="/managehirecontract/managehirecontractItem"
              as={`/managehirecontract/${row.id}`}
            >
              <button class="btn btn-primary btn-sm w-100 ms-2">
                {" "}
                จัดการ{" "}
              </button>
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
        setHirecontractData(data.user.hirecontracts);
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

export default TaskRequestTable;
