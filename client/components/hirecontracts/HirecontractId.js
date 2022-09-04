import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React from "react";
import { QUERY_HIRECONTRACT } from "../../apollo/queries";
import CarouselSubcontract from "../subcontracts/CarouselSubcontract";
import HirecontractTable from "./hirecontractsTable/hirecontractTable";

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
      <CarouselSubcontract />
      <div class="container">
        <div class="row">
          <HirecontractTable hirecontract={data.hirecontract} />
        </div>
      </div>
    </>
  );
};

export default HirecontractId;
