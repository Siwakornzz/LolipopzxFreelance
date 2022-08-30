import { useMutation } from "@apollo/react-hooks";
import { Router } from "next/router";
import React, { useState } from "react";
import { CREATE_HIRECONTRACT } from "../../apollo/mutations";
import { QUERY_HIRECONTRACTS } from "../../apollo/queries";
import FormHirecontract from "./FormHirecontract";
import Help from "../help/Help";

const CreateHirecontract = () => {
  const [hirecontractData, setHirecontractData] = useState({});
  console.log(hirecontractData);
  const [createHirecontract, { loading, error }] = useMutation(
    CREATE_HIRECONTRACT,
    {
      variables: {
        ...hirecontractData,
        budget: +hirecontractData.budget,
        duration: +hirecontractData.duration,
        condition: hirecontractData.condition?.replace(/\s/g, ""),
        typeofwork: hirecontractData.typeofwork?.replace(/\s/g, ""),
      },
      refetchQueries: [{ query: QUERY_HIRECONTRACTS }],
    }
  );

  const handleChange = (e) => {
    setHirecontractData({
      ...hirecontractData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await createHirecontract();
      console.log(result);
      alert("Create Hirecontract Success");
      Router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="container">
        <div class=" mt-4 me-4 ms-4 mb-4">
          <div class="row">
            <h4> เพิ่มงานที่ลงปรกาศ + </h4>

            <div class="col-md-8 mt-4 mt-2 ms-5 ms-5 mb-3">
              <FormHirecontract />
            </div>

            <Help />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHirecontract;
