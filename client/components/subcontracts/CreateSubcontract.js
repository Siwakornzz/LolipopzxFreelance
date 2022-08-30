import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { QUERY_SUBCONTRACTS } from "../../apollo/queries";
import { CREATE_SUBCONTRACT } from "../../apollo/mutations";
import Router from "next/router";
import Swal from "sweetalert2";
import Help from "../help/Help";
import FormSubcontract from "./FormSubcontract";

const CreateSubcontracts = () => {
  const [subcontractData, setSubcontractData] = useState({
    name: "",
    username: "",
    email: "",
    yearskill: null,
    tel: "",
    skill: "",
    natureofwork: "",
    member: null,
    idcard: "",
    budget: null,
    lineid: "",
    province: "",
    district: "",
    subdistrict: "",
    zip: "",
    nameofbank: "",
    accountnumber: "",
    nameofaccount: "",
    promptpay: "",
  });

  const [createSubcontract, { loading, error }] = useMutation(
    CREATE_SUBCONTRACT,
    {
      variables: {
        ...subcontractData,
        yearskill: +subcontractData.yearskill,
        member: +subcontractData.member,
        budget: +subcontractData.budget,
        skill: subcontractData.skill?.replace(/\s/g, ""),
        natureofwork: subcontractData.natureofwork?.replace(/\s/g, ""),
      },
      refetchQueries: [{ query: QUERY_SUBCONTRACTS }],
    }
  );

  const handleChange = (e) => {
    setSubcontractData({ ...subcontractData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await createSubcontract();
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "LOLIPOPZ",
        text: "สร้าง SUBCONTRACT สำเร็จ ",
      });

      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "LOLIPOPZ",
        text: error.graphQLErrors[0]?.message,
      });
    }
  };

  return (
    <>
      <div class="container">
        <div class=" mt-4 me-4 ms-4 mb-4">
          <div class="row">
            <h4> เพิ่มงานที่รับทำ + </h4>

            <div class="col-md-8 mt-4 mt-2 ms-5 ms-5 mb-3">
              <FormSubcontract />
            </div>

            <Help />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubcontracts;
