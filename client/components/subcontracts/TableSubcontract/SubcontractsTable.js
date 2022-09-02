import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTS } from "../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

const SubcontractsTable = () => {
  const [AllSubcontracts, setAllSubcontracts] = useState([]);
  console.log(AllSubcontracts);

  const columns = [
    {
      cell: (row, index) => (
        <>
          {index + 1}
          {row.topic}
        </>
      ),
    },
  ];

  const responseAllSubcontract = useQuery(QUERY_SUBCONTRACTS, {
    onCompleted: (data) => {
      if (data) {
        setAllSubcontracts(data.subcontracts);
      }
    },
  });
  return (
    <DataTableExtensions
      columns={columns}
      data={AllSubcontracts}
      print={false}
      export={false}
      filter={true}
    >
      <DataTable pagination />
    </DataTableExtensions>
  );
};

export default SubcontractsTable;
