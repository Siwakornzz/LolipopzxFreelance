import React, { useState } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import { QUERY_SUBCONTRACTSALL } from "../../../../apollo/queries";
import moment from "moment";

const ManagesubcontractsItem = () => {
  const [subcontractData, setSubcontractData] = useState([]);
  const { data } = useQuery(QUERY_SUBCONTRACTSALL, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setSubcontractData(data.subcontractsall);
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
      name: "รายละเอียด",
      selector: "detail",
      sortable: true,
      center: true,
    },
    {
      name: "ระยะเวลาในการทำงาน / วัน",
      selector: "duration",
      cell: (row) => <>{Number(row.duration).toLocaleString("en")}</>,
      sortable: true,
      center: true,
    },
    {
      name: "งบประมาณเริ่มต้น / บาท",
      selector: "startbudget",
      cell: (row) => <>{Number(row.startbudget).toLocaleString("en")}</>,
      sortable: true,
      center: true,
    },

    {
      name: "จังหวัด",
      selector: "province",
      sortable: true,
      center: true,
    },
    {
      name: "ผู้สร้าง",
      selector: "subcontractCreatorId".username,
      cell: (row) => <>{row.subcontractCreatorId.username}</>,
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

          {row.status === "APPROVE" && (
            <span class="badge text-bg-success"> {row.status}</span>
          )}

          {row.status === "DENIED" && (
            <span class="badge text-bg-danger"> {row.status}</span>
          )}
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "สร้างเมื่อ",
      selector: "createdAt",
      cell: (row) => <>{moment(row.createdAt).locale("th").format("LLLL")}</>,

      sortable: true,
      center: true,
    },
    {
      name: "เมนู",
      cell: (row) => (
        <>
          <div class="text-center">
            <Link
              key={row.id}
              href="/subcontracts/[subcontractId]"
              as={`/subcontracts/${row.id}`}
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

export default ManagesubcontractsItem;
