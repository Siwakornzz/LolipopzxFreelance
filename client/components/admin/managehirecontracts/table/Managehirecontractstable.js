import React, { useState } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import { QUERY_HIRECONTRACTS } from "../../../../apollo/queries";

const Managehirecontractstable = () => {
  const [hirecontractData, setHirecontractData] = useState([]);
  const { data } = useQuery(QUERY_HIRECONTRACTS, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setHirecontractData(data.hirecontracts);
    },
  });

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
      selector: "status",
      cell: (row) => (
        <>
          {row.status === "WAITING" && (
            <span class="badge text-bg-warning"> {row.status}</span>
          )}
          {row.status === "กำลังรอการตอบรับจากผู้รับเหมาช่วง" && (
            <span class="badge text-bg-info"> {row.status}</span>
          )}
          {row.status === "APPROVE" && (
            <span class="badge text-bg-success"> {row.status}</span>
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
              <button class="btn btn-secondary btn-sm ">ดูรายละเอียด</button>
            </Link>
          </div>
        </>
      ),
      center: true,
    },
  ];
  return (
    <DataTableExtensions columns={columns} data={hirecontractData}>
      <DataTable
        pagination
        // selectableRows
        // selectableRowsHighlight
        highlightOnHover
      />
    </DataTableExtensions>
    // <></>
  );
};
export default Managehirecontractstable;
