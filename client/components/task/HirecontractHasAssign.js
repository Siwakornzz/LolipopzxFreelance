import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Me } from "../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import {
  SUBCONTRACT_ACCEPTHIRECONTRACT,
  SUBCONTRACT_DENIEDTHIRECONTRACT,
  SUCCESS_JOB,
} from "../../apollo/mutations";
import Swal from "sweetalert2";

const HirecontractHasAssign = () => {
  const [hirecontractData, setHirecontractData] = useState([]);

  const handleFinish = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะสำเร็จงานใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await finishWork({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "ทำงานสำเร็จ !", "success");
            })
            .then(() => Router.push("/task"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const handleAcceptwork = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะรับงานใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await acceptHirecontract({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "รับคำร้องการจ้าง สำเร็จ !", "success");
            })
            .then(() => Router.push("/task"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleDeniedwork = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะปฎิเสธงานใช่หรือไม่ ?",
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
              Swal.fire("LOLIPOPZ", "ปฎิเสธคำร้องการจ้าง สำเร็จ !", "success");
            })
            .then(() => Router.push("/task"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const [acceptHirecontract] = useMutation(SUBCONTRACT_ACCEPTHIRECONTRACT, {});
  const [deniedHirecontract] = useMutation(SUBCONTRACT_DENIEDTHIRECONTRACT, {});
  const [finishWork] = useMutation(SUCCESS_JOB, {});

  const columns = [
    {
      name: "หัวข้อประกาศงานที่จ้างมา",
      selector: "hirecontract.topic",
      sortable: true,
      center: true,
    },
    {
      name: "ประเภทของงาน",
      selector: "hirecontract.typeofwork",
      sortable: true,
      center: true,
    },
    {
      name: "งบประมาณที่จ้าง",
      selector: "hirecontract.budget",
      sortable: true,
      center: true,
    },
    {
      name: "สถานะ",
      selector: "hirecontract.status",
      cell: (row) => (
        <>
          {row.hirecontract.status ===
            "งานที่จ้างเข้ามาทำเสร็จเรียบร้อยแล้ว" && (
            <span class="badge text-bg-success">{row.hirecontract.status}</span>
          )}
          {row.hirecontract.status ===
            "ผู้รับเหมาช่วงยืนยันรับงานแล้วกำลังทำงาน" && (
            <span class="badge text-bg-info">{row.hirecontract.status}</span>
          )}
          {row.hirecontract.status === "กำลังรอการตอบรับจากผู้รับเหมาช่วง" && (
            <span class="badge text-bg-info"> {row.hirecontract.status}</span>
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
      name: "เมนู",
      cell: (row) => (
        <>
          <div class="row">
            {row.hirecontract.status ===
              "ผู้รับเหมาช่วงยืนยันรับงานแล้วกำลังทำงาน" && (
              <div class="col-md-4">
                <button
                  class="btn btn-success btn-sm w-100"
                  onClick={async () => await handleFinish(row.hirecontract.id)}
                >
                  ทำงานสำเร็จ
                </button>
              </div>
            )}
            {row.hirecontract.status !==
              "ผู้รับเหมาช่วงยืนยันรับงานแล้วกำลังทำงาน" &&
              row.hirecontract.status !==
                "งานที่จ้างเข้ามาทำเสร็จเรียบร้อยแล้ว" && (
                <>
                     <div class="col-md-4">
                    <button
                      class="btn btn-secondary btn-sm w-100"
                      onClick={async () =>
                        await handleAcceptwork(row.hirecontract.id)
                      }
                    >
                      รับงาน
                    </button>
                  </div>

                  <div class="col-md-4">
                    <button
                      class="btn btn-secondary btn-sm w-100"
                      onClick={async () =>
                        await handleDeniedwork(row.hirecontract.id)
                      }
                    >
                      ปฎิเสธงาน
                    </button>
                  </div>
                </>
              )}

            <div class="col text-center ">
              <Link
                key={row.hirecontract.id}
                href="/hirecontracts/[hirecontractId]"
                as={`/hirecontracts/${row.hirecontract.id}`}
              >
                <button class="btn btn-secondary btn-sm w-100">
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

  const responseHirecontract = useQuery(Me, {
    onCompleted: (data) => {
      if (data) {
        setHirecontractData(data.user.task);
      }
    },
  });

  return (
    <div class="card">
      <div class="card-header text-center"> จัดการงานที่จ้างเข้ามา</div>

      <div class="card-body">
        <DataTableExtensions columns={columns} data={hirecontractData}>
          <DataTable pagination highlightOnHover />
        </DataTableExtensions>
      </div>
    </div>
  );
};

export default HirecontractHasAssign;
