import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Me } from "../../../../apollo/queries";
import { useQuery } from "@apollo/client";
import DataTableExtensions from "react-data-table-component-extensions";

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
      selector: "status",
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
