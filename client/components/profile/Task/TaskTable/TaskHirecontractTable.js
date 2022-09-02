import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import { Me } from "../../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";

const TaskRequestTable = () => {
  const [hirecontractData, setHirecontractData] = useState([]);

  console.log(hirecontractData);
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
        <button class="btn btn-secondary btn-sm" onClick={() => alert(row.id)}>
          ดูรายละเอียด
        </button>
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
