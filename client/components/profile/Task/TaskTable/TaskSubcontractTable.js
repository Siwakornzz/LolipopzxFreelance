import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Me, QUERY_SUBCONTRACTSALL } from "../../../../apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
import { DELETE_SUBCONTRACT2 } from "../../../../apollo/mutations";
import Swal from "sweetalert2";
const TaskAddTable = () => {
  const [subcontractData, setSubcontractData] = useState([]);

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
          await deleteSubcontract({
            variables: {
              id: id,
            },
          })
            .then(() => {
              Swal.fire("LOLIPOPZ", "ลบข้อมูลผู้รับเหมา สำเร็จ !", "success");
            })
            .then(() => Router.push("/managesubcontract"));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const [deleteSubcontract] = useMutation(DELETE_SUBCONTRACT2, {
    onCompleted: (data, loading, error) => {
      if (data) {
        console.log(data);
      }
    },
    refetchQueries: [{ query: QUERY_SUBCONTRACTSALL }],
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

          {row.status === "APPROVE" && (
            <span class="badge text-bg-success"> {row.status}</span>
          )}

          {row.status === "DENIED" && (
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
          <div class="col">
            <Link
              key={row.id}
              href="/subcontracts/[subcontractId]"
              as={`/subcontracts/${row.id}`}
            >
<<<<<<< HEAD
              <button class="btn btn-primary btn-sm"><i class="bi bi-eye-fill"></i>
              </button>
=======
              <button className="btn btn-primary btn-sm">
                <i class="bi bi-eye-fill"></i>
                </button>
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
            </Link>
          </div>

          <div class="col">
            {row.status !== "ผู้ว่าจ้างลบข้อมูล" && (
              <Link
                key={row.id}
                href="/managesubcontract/subcontractItemId"
                as={`/managesubcontract/${row.id}`}
              >
                <button class="btn btn-warning btn-sm">
                  {" "}
                  <i class="bi bi-pencil-square"></i>{" "}
                </button>
              </Link>
            )}
          </div>

          <div class="col">
            {row.status !== "ผู้ว่าจ้างลบข้อมูล" && (
              <button
<<<<<<< HEAD
                class="btn btn-danger btn-sm "
=======
                class="btn btn-danger btn-sm"
>>>>>>> 671b2ce4073d7444679fc2d5e3d254e6964df20f
                onClick={async () => await handleDelete(row.id)}
              >
                {" "}
                <i class="bi bi-trash-fill"></i>{" "}
              </button>
            )}
          </div>
        </>
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
    <>
      <DataTableExtensions columns={columns} data={subcontractData}>
        <DataTable
          pagination
          // selectableRows
          // selectableRowsHighlight
          highlightOnHover
        />
      </DataTableExtensions>
    </>
  );
};

export default TaskAddTable;
