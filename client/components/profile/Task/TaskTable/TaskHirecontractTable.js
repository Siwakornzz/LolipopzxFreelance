import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "@apollo/client";
<<<<<<< HEAD
import { Me, QUERY_HIRECONTRACTS } from "../../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import { DELETE_HIRECONTRACT2 } from "../../../../apollo/mutations";
=======
import { Me } from "../../../../apollo/queries";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
import Swal from "sweetalert2";
const TaskRequestTable = () => {
  const [hirecontractData, setHirecontractData] = useState([]);
  const handleDelete = async (id) => {
    Swal.fire({
      title: "LOLIPOPZ",
      text: "คุณจะลบข้อมูลใช่หรือไม่ ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
<<<<<<< HEAD
          await deleteSubcontract({
=======
          await deleteHirecontract({
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "ลบข้อมูลผู้ว่าจ้าง สำเร็จ !", "success");
            })
            .then(() => Router.push("/managehirecontract"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

<<<<<<< HEAD
  const [deleteSubcontract] = useMutation(DELETE_HIRECONTRACT2, {
=======
  const [deleteHirecontract] = useMutation(DELETE_HIRECONTRACT2, {
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
<<<<<<< HEAD
    refetchQueries: [{ query: QUERY_HIRECONTRACTS }],
=======
    refetchQueries: [{ query: QUERY_SUBCONTRACTSALL }],
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
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
          {row.status === "ผู้รับเหมาช่วงปฎิเสธการรับงาน" && (
            <span class="badge text-bg-danger"> {row.status}</span>
          )}
          {row.status === "ผู้ว่าจ้างลบข้อมูล" && (
            <span class="badge text-bg-danger"> {row.status}</span>
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
          <div class="col-md-4">
            <Link
              key={row.id}
              href="/hirecontracts/[hirecontractId]"
              as={`/hirecontracts/${row.id}`}
            >
<<<<<<< HEAD
              <button class="btn btn-primary btn-sm"><i class="bi bi-eye-fill"></i></button>
            </Link>
          </div>
          {row.status !== "ผู้ว่าจ้างลบข้อมูล" && (
            <>
              <div class="col-md-4">
                <Link
                  key={row.id}
                  href="/managehirecontract/managehirecontractItem"
                  as={`/managehirecontract/${row.id}`}
                >
                  <button class="btn btn-warning btn-sm">
                  {" "}
                  <i class="bi bi-pencil-square"></i>{" "}
                </button>
                </Link>
              </div>

              <div class="col-md-4">
                <button
                  class="btn btn-danger btn-sm"
                  onClick={async () => await handleDelete(row.id)}
                >
                  {" "}
                  <i class="bi bi-trash-fill"></i>{" "}
                </button>
              </div>
            </>
          )}
=======
              <button class="btn btn-primary btn-sm ">
                <i class="bi bi-eye-fill"></i>
              </button>
            </Link>
          </div>
          <div class="col-md-4">
            <Link
              key={row.id}
              href="/managehirecontract/managehirecontractItem"
              as={`/managehirecontract/${row.id}`}
            >
              <button className="btn btn-warning btn-sm">
                {" "}
                <i class="bi bi-pencil-square"></i>{" "}
              </button>
            </Link>
          </div>

          <div class="col-md-4">
            {row.status !== "ผู้ว่าจ้างลบข้อมูล" && (
              <button
                class="btn btn-danger btn-sm"
                onClick={async () => await handleDelete(row.id)}
              >
                {" "}
                <i class="bi bi-trash-fill"></i>{" "}
              </button>
            )}
          </div>
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
        </>
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
