import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { QUERY_SUBCONTRACTS } from "../../apollo/queries";
import { useQuery } from "@apollo/client";

const TaskAcceptTable = () => {
  const [subcontractData, setSubcontractData] = useState([]);

  const responseSubcontract = useQuery(QUERY_SUBCONTRACTS, {
    onCompleted: (data) => {
      setSubcontractData(data.subcontracts);
    },
  });
  console.log(responseSubcontract?.data?.subcontracts);
  console.log("sub", subcontractData);

  const columns = [
    {
      name: "ทีมที่รับงาน",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "ชื่อตัวแทนของทีมที่รับงาน",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "สถานะของทีมที่รับงาน",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "เมนู",
      cell: (row) => (
        <button class="btn btn-secondary btn-sm" onClick={() => alert(row.id)}>
          ดูรายละเอียด
        </button>
      ),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={subcontractData}
      pagination
      // selectableRows
      // selectableRowsHighlight
      highlightOnHover
    />
  );
};

export default TaskAcceptTable;
