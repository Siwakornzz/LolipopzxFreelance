import Router, { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
import {
  QUERY_HIRECONTRACT,
  QUERY_HIRECONTRACTSWAITING,
  QUERY_REQUESTMATCHING,
  QUERY_SUBCONTRACTS,
} from "../../../apollo/queries";
import Swal from "sweetalert2";
import { ASSIGN_HIRECONTRACT } from "../../../apollo/mutations";
import Link from "next/link";
import moment from "moment";

const Requestmatching = () => {
  const route = useRouter();
  const [hirecontract, setHirecontract] = useState([]);
  const [datamatching, setDatamatching] = useState([]);

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.matchingId },
    onCompleted: (data) => {
      setHirecontract(data.hirecontract);
    },
  });

  const { requestmatchings } = useQuery(QUERY_REQUESTMATCHING, {
    variables: {
      id: hirecontract.id,
      province: hirecontract.province,
      budget: +hirecontract.budget,
      typeofwork: hirecontract.typeofwork,
    },
    onCompleted: (data) => {
      setDatamatching(data.requestmatching);
    },
  });

  console.log("hcon", hirecontract);
  console.log("dm", datamatching);
  const hirecontractId = route.query.matchingId;

  // console.log(data);
  const handleSelect = async (id, subcontractCreatorID) => {
    try {
      await assign({
        variables: {
          id: hirecontractId,
          subcontractAcceptHirecontractId: id,
          subcontractCreatorId: subcontractCreatorID,
        },
      }).then(() => Router.push("/admin/matching"));
    } catch (error) {
      console.log(error);
    }
  };

  const [assign] = useMutation(ASSIGN_HIRECONTRACT, {
    onCompleted: (data, loading, error) => {
      if (data) {
        Swal.fire({
          icon: "success",
          title: "LOLIPOPZ",
          text: "เพิ่มงานให้กับผู้รับงานที่เลือกสำเร็จ ",
        });
      }
      if (loading) {
        Swal.fire({
          icon: "info",
          title: "LOLIPOPZ",
          text: "กำลังเพิ่มงานให้กับผู้รับงาน",
        });
      }
      if (error) {
        Swal.fire({
          icon: "error",
          title: "LOLIPOPZ",
          text: "เกิดข้อผิดพลาดโปรดลองใหม่อีกครั้งในภายหลัง !",
        });
      }
    },
    refetchQueries: [{ query: QUERY_HIRECONTRACTSWAITING }],
  });
  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <div class="mt-5 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card ">
              <div class="card-header text-center">
                คำร้องขอการจ้างงาน
              </div>
              <div class="card-body  text-start">
                <p>
                  {" "}
                  <span style={{ color: "red" }}> หัวข้อประกาศงาน : </span>{" "}
                  {data?.hirecontract.topic}
                </p>

                <p>
                  {" "}
                  <span style={{ color: "red" }}> ประเภทของงาน : </span>{" "}
                  {data?.hirecontract.typeofwork}
                </p>

                <p>
                  {" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    รายละเอียดของงาน :{" "}
                  </span>{" "}
                  {data?.hirecontract.detail}
                </p>

                <p>
                  {" "}
                  <span style={{ color: "red" }}> งบประมาณ : </span>
                  {data?.hirecontract.budget} บาท
                </p>

                <p>
                  <span style={{ color: "red" }}> จังหวัด : </span>
                  {data?.hirecontract.province}
                </p>
                <div class="card-footer text-center">
                  <small style={{ color: "red" }}> ผู้ร้องขอ : </small>
                  {data?.hirecontract.hirecontractCreatorId.username}
                  <br />
                  <small style={{ color: "red" }}> สร้างคำร้องเมื่อ : </small>
                  {moment(data?.hirecontract.createdAt).locale("th").format("LLLL")}
                
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 ">
            <div class="card">
              <div class="card-header"> รายการข้อมูลผู้รับเหมาช่วงที่ตรงตามงานที่จ้าง </div>
              <div class="card-body">
                {datamatching.length <= 0 && (
                  <div class="card">
                    <div class="card-body">
                      <div class="container">
                        <div class="text-center">
                          <h5>
                            {" "}
                            ไม่พบผู้ประกาศงานที่รับงาน
                            โปรดลองใหม่อีกครั้งในภายหลัง !{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {datamatching?.map((v) => (
                  <>
                    <div class="card mt-1 ">
                      <div class="card-header">SUBCONTRACTNAME : {v.name}</div>
                      <div class="card-body"></div>
                      <p>SUBCONTRACT ID : {v.id} </p>
                      <p> ประเภทของงานที่รับทำ : {v.typeofwork} </p>
                      <p>งบประมาณ : {v.startbudget} บาท </p>

                      <button
                        class="btn btn-outline-primary w-50 m-auto p-auto  mb-2  "
                        onClick={async () =>
                          await handleSelect(v.id, v.subcontractCreatorId.id)
                        }
                      >
                        {" "}
                        เลือกผู้รับงาน{" "}
                      </button>

                      <Link
                        key={v.id}
                        href="/subcontracts/[subcontractId]"
                        as={`/subcontracts/${v.id}`}
                      >
                        <button class="btn btn-outline-primary w-50 m-auto p-auto  mb-2 ">
                          ดูรายละเอียดเพิ่มเติม
                        </button>
                      </Link>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestmatching;
