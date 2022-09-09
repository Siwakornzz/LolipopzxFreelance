import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "@apollo/client";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import { QUERTY_SUBCONTRACTSWAITING } from "../../../../../../apollo/queries";
import moment from "moment";
import Swal from "sweetalert2";

const SubcontractWaitingTable = () => {
  const [subcontractData, setSubcontractData] = useState([]);

  const { data, loading, error } = useQuery(QUERTY_SUBCONTRACTSWAITING, {
    onCompleted: (data) => {
      setSubcontractData(data.subcontractswaiting);
    },
  });

  console.log(data);
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
      cell: (row) => (
        <>
          {row.status === "WAITING" && (
            <span className="badge text-bg-warning"> {row.status}</span>
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
          <div className="row g-3 mt-2">
            <div className="col-md-4">
              <button
                className="btn btn-primary btn-sm w-100 "
                onClick={() =>
                  Swal.fire({
                    title: "LOLIPOPZ",
                    text: "อนุมัติ " + row.id + " เรียบร้อย",
                    icon: "success",
                  })
                }
              >
                อนุมัติ
              </button>
            </div>

            <div className="col-md-4">
              <button
                className="btn btn-danger btn-sm w-100"
                onClick={() =>
                  Swal.fire({
                    title: "LOLIPOPZ",
                    text: "ปฎิเสธ " + row.id + " เรียบร้อย",
                    icon: "error",
                  })
                }
              >
                {" "}
                ปฎิเสธ{" "}
              </button>
            </div>
            <div className="col-md-4">
              <Link
                key={row.id}
                href="/subcontracts/[subcontractId]"
                as={`/subcontracts/${row.id}`}
              >
                <button className="btn btn-secondary btn-sm w-100">
                  ดูรายละเอียด
                </button>
              </Link>
            </div>
          </div>
        </>
      ),
      center: true,
    },
  ];

  if (loading) {
    return <p> loading...</p>;
  }
  if (error) {
    return <p> something went wrong</p>;
  }
  return (
    <>
      <div class="card">
        <div class="card-header text-center mt-3">
          จัดการข้อมูลผู้ว่าจ้างที่ร้องขอ
        </div>

        <DataTableExtensions columns={columns} data={subcontractData}>
          <DataTable
            pagination
            // selectableRows
            // selectableRowsHighlight
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </>
  );
};

export default SubcontractWaitingTable;
