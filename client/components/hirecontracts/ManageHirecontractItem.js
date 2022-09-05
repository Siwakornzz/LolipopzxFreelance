import { useRouter } from "next/router";
import React from "react";
import { QUERY_HIRECONTRACT } from "../../apollo/queries";

const ManageHirecontractItem = () => {
  const route = useRouter();

  const { data, loading, error } = useQuery(QUERY_HIRECONTRACT, {
    variables: { id: route.query.hirecontractId },
  });
  return <div>ManageHirecontractItem</div>;
};

export default ManageHirecontractItem;
