import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_USERS } from "../../../../apollo/queries";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import Link from "next/link";
const UserTable = () => {
  const [Users, setUsers] = useState([]);

  const { data, loading, error } = useQuery(QUERY_USERS, {
    onCompleted: (data) => {
      if (data) {
        setUsers(data.users);
      }
    },
  });

  const columns = [
    {
      name: "ชื่อผู้ใช้งาน",
      selector: "username",
      sortable: true,
      center: true,
    },
    {
      name: "ชื่อ",
      selector: "firstname",
      sortable: true,
      center: true,
    },
    {
      name: "นามสกุล",
      selector: "lastname",
      sortable: true,
      center: true,
    },
    {
      name: "อีเมล์",
      selector: "email",
      sortable: true,
      center: true,
    },
    {
      name: "LINE ID",
      selector: "lineid",
      cell: (row) => <>{row.lineid && row.lineid}</>,
      sortable: true,
      center: true,
    },
    {
      name: "เบอร์โทรศัพท์",
      selector: "tel",
      cell: (row) => <>{row.tel && row.tel}</>,
      sortable: true,
      center: true,
    },
    {
      name: "จังหวัด",
      selector: "province",
      cell: (row) => <>{row.province && row.province}</>,
      sortable: true,
      center: true,
    },
    {
      name: "ตำบล",
      selector: "subdistrict",
      cell: (row) => <>{row.subdistrict && row.subdistrict}</>,
      sortable: true,
      center: true,
    },
    {
      name: "อำเภอ",
      selector: "district",
      cell: (row) => <>{row.district && row.district}</>,
      sortable: true,
      center: true,
    },
    {
      name: "รหัสไปรษณีย์",
      selector: "zipcode",
      cell: (row) => <>{row.zipcode && row.zipcode}</>,
      sortable: true,
      center: true,
    },
    {
      name: "Role",
      selector: "roles",
      cell: (row) => (
        <>
          {row.roles === "Admin" && (
            <span class="badge text-bg-dark">{row.roles}</span>
          )}
          {row.roles === "User" && (
            <span class="badge text-bg-primary">{row.roles}</span>
          )}
        </>
      ),
      sortable: true,
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
      <div className="row ">
        <div className="card">
          <div className="card-header text-center mt-2 mb-2">
            จัดการผู้ใช้งาน
          </div>
          <div className="card-body">
            {data && (
              <DataTableExtensions columns={columns} data={Users}>
                <DataTable
                  pagination
                  // selectableRows
                  // selectableRowsHighlight
                  highlightOnHover
                />
              </DataTableExtensions>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
