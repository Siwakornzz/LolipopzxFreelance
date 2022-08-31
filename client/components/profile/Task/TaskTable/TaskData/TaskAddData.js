import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Me } from "../../../../../apollo/queries";

const { data, loading, error } = useQuery(Me, {});
export const subcontractData = data;
export const columns = [
  {
    name: "หัวข้อประกาศงาน",
    selector: (row) => row.topic,
    sortable: true,
    center: true,
  },
  {
    name: "ประเภทของงาน",
    selector: (row) => row.typeofwork,
    sortable: true,
    center: true,
  },
  {
    name: "สถานะ",
    selector: (row) => row.status,
    sortable: true,
    center: true,
  },
  {
    name: "เมนู",
    cell: (row) => (
      <button class="btn btn-secondary btn-sm" onClick={() => alert(row.id)}>
        ดูรายละเอียด
      </button>
    ),
    center: true,
  },
];
