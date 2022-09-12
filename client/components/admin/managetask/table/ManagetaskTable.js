import React, { useState } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";

import moment from "moment";
import { QUERY_TASKALL } from "../../../../apollo/queries";

const ManagetaskTable = () => {
  const [taskData, setTaskData] = useState([]);
  const { data } = useQuery(QUERY_TASKALL, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setTaskData(data.taskall);
    },
  });

  const columns = [
    {
      name: "หัวข้อประกาศงาน",
      selector: "hirecontract".topic,
      cell: (row) => <>{row.hirecontract.topic}</>,
      sortable: true,
      center: true,
    },
    {
      name: "ประเภทของงาน",
      selector: "hirecontract".typeofwork,
      cell: (row) => <>{row.hirecontract.typeofwork}</>,
      sortable: true,
      center: true,
    },
    {
      name: "รายละเอียด",
      selector: "hirecontract".detail,
      cell: (row) => <>{row.hirecontract.detail}</>,
      sortable: true,
      center: true,
    },
    {
      name: "ระยะเวลาในการทำงาน / วัน",
      selector: "hirecontract".duration,
      cell: (row) => (
        <>{Number(row.hirecontract.duration).toLocaleString("en")}</>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "งบประมาณเริ่มต้น / บาท",
      selector: "hirecontract".budget,
      cell: (row) => (
        <>{Number(row.hirecontract.budget).toLocaleString("en")}</>
      ),
      sortable: true,
      center: true,
    },

    {
      name: "ผู้สร้าง",
      selector: "hirecontract",
      cell: (row) => <>{row.hirecontract.hirecontractCreatorId.username}</>,
      sortable: true,
      center: true,
    },
    {
      name: "สถานะ",
      selector: "hirecontract",
      cell: (row) => (
        <>
          {row.hirecontract.status ===
            "ผู้รับเหมาช่วงยืนยันรับงานแล้วกำลังทำงาน" && (
            <span class="badge text-bg-warning">
              {" "}
              {row.hirecontract.status}
            </span>
          )}

          {row.hirecontract.status === "ผู้รับเหมาช่วงทำงานสำเร็จแล้ว" && (
            <span class="badge text-bg-success">
              {" "}
              {row.hirecontract.status}
            </span>
          )}

          {row.hirecontract.status === "ผู้รับเหมาช่วงปฎิเสธการรับงาน" && (
            <span class="badge text-bg-danger"> {row.hirecontract.status}</span>
          )}
        </>
      ),
      sortable: true,
      center: true,
    },
    {
      name: "สร้างเมื่อ",
      selector: "hirecontract".createdAt,
      cell: (row) => (
        <>{moment(row.hirecontract.createdAt).locale("th").format("LLLL")}</>
      ),

      sortable: true,
      center: true,
    },
    {
      name: "ผู้รับงาน",
      selector: "subcontract",
      cell: (row) => <>{row.subcontract.subcontractCreatorId.username}</>,

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
              href="/hirecontract/[hirecontractId]"
              as={`/hirecontract/${row.id}`}
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
    <div class="row">
      <div class="card">
        <div class="card-header text-center"> จัดการงาน</div>
        <DataTableExtensions columns={columns} data={taskData}>
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

export default ManagetaskTable;
