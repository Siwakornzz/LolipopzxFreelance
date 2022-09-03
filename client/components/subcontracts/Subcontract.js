import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { QUERY_SUBCONTRACT } from "../../apollo/queries";
import { AuthContext } from "../../appstate/AuthProvider";
import ProfileSubcontract from "./subcontractdetail/ProfileSubcontract";
import SubcontractDetail from "./subcontractdetail/SubcontractDetail";

const Subcontract = () => {
  const { user } = useContext(AuthContext);
  const route = useRouter();
  const { data, loading, error } = useQuery(QUERY_SUBCONTRACT, {
    variables: { id: route.query.subcontractId },
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
          <div class="col-md-8 mt-4 mt-2 ms-5 ms-5 mb-3">
            <SubcontractDetail subcontract={data} />
          </div>

          <div class="col-md-3 ms-5 ">
            <div class="mt-5">
              <ProfileSubcontract subcontract={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subcontract;
