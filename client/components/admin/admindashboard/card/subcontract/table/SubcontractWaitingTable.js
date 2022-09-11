import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "@apollo/client";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import { QUERTY_SUBCONTRACTSWAITING } from "../../../../../../apollo/queries";
import moment from "moment";
import Swal from "sweetalert2";
import {
  ADMIN_ACCEPTSUBCONTRACT,
  ADMIN_DENIEDSUBCONTRACT,
} from "../../../../../../apollo/mutations";

const SubcontractWaitingTable = () => {
  const [subcontractData, setSubcontractData] = useState([]);

  const { data, loading, error } = useQuery(QUERTY_SUBCONTRACTSWAITING, {
    onCompleted: (data) => {
      setSubcontractData(data.subcontractswaiting);
    },
  });

  const handleAccept = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะอนุมัติใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await accept({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "อนุมัติคำร้อง สำเร็จ !", "success");
            })
            .then(() => Router.push("/admin/managesubcontractWaiting"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleDenied = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะปฎิเสธการอนุมัติใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deniedHirecontract({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire(
                "LOLIPOPZ",
                "ปฎิเสธคำร้องขอการอนุมัติ สำเร็จ !",
                "success"
              );
            })
            .then(() => Router.push("/admin/managesubcontractWaiting"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const [accept] = useMutation(ADMIN_ACCEPTSUBCONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
    refetchQueries: [{ query: QUERTY_SUBCONTRACTSWAITING }],
  });
  const [deniedHirecontract] = useMutation(ADMIN_DENIEDSUBCONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
    refetchQueries: [{ query: QUERTY_SUBCONTRACTSWAITING }],
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
                onClick={async () => await handleAccept(row.id)}
              >
                อนุมัติ
              </button>
            </div>

            <div className="col-md-4">
              <button
                className="btn btn-danger btn-sm w-100"
                onClick={async () => await handleDenied(row.id)}
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
