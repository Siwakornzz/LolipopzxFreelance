import { useRouter } from "next/router";
import React from "react";

const SubcontractItemId = () => {
  const route = useRouter();
  console.log(route);
  console.log(route.query.managesubcontractsItem)
  
  return (
    <>
    <p> subcontractItemId : {route.query.managesubcontractsItem}</p>
    </>
  )
};

export default SubcontractItemId;
