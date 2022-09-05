import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";
import { QUERY_HIRECONTRACT } from "../../apollo/queries";

import HirecontractDetail from "./hirecontractdetail/HirecontractDetail";
import ProfileHirecontract from "./hirecontractdetail/ProfileHirecontract";
const HirecontractId = () => {
  const route = useRouter();

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.hirecontractId },
  });

  if (error) {
    return <p> Something went wrong</p>;
  }

  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-7 mt-4 mt-2 ms-5 ms-5 mb-3">
            <HirecontractDetail hirecontract={data} />
          </div>

          <div class="col-md-4 ms-5 ">
            <div class="mt-5">
              <ProfileHirecontract hirecontract={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HirecontractId;
