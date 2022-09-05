import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Me } from "../../../../apollo/queries";
import { useQuery } from "@apollo/client";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
const TaskAddTable = () => {
  const [subcontractData, setSubcontractData] = useState([]);

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
              href="/subcontracts/[subcontractId]"
              as={`/subcontracts/${row.id}`}
            >
              <button class="btn btn-secondary btn-sm ">ดูรายละเอียด</button>
            </Link>
          </div>

          <div class="col">
          <Link
              key={row.id}
              href="/managesubcontract/subcontractItemId"
              as={`/managesubcontract/${row.id}`}
            >
            <button class="btn btn-primary btn-sm w-100 ms-2"> จัดการ </button>
            </Link>
          </div>
        </>
      ),
      center: true,
    },
  ];
  const responseSubcontract = useQuery(Me, {
    onCompleted: (data) => {
      // console.log(data.user.subcontracts);
      setSubcontractData(data.user.subcontracts);
    },
  });

  return (
    <DataTableExtensions columns={columns} data={subcontractData}>
      <DataTable
        pagination
        // selectableRows
        // selectableRowsHighlight
        highlightOnHover
      />
    </DataTableExtensions>
  );
};

export default TaskAddTable;
