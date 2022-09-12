import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTSWAITING } from "../../../apollo/queries";
import Link from "next/link";
import Swal from "sweetalert2";
import moment from "moment";
import RequestMatchingItem from "./RequestMatchingItem";

const HirecontractsWaiting = () => {
  const [requestItem, setRequestItem] = useState({});
  const hirecontractswaiting = useQuery(QUERY_HIRECONTRACTSWAITING, {
    onCompleted: (data, loading, error) => {
      setRequestItem(data.hirecontractswaiting);
      if (error) {
        return <p> Something went wrong</p>;
      }

      if (loading) {
        return <p> Loading...</p>;
      }

      if (data.hirecontractswaiting.length <= 0) {
        Swal.fire({
          icon: "info",
          title: "LOLIPOPZ",
          text: "No Data Found Try Again Later or No Hirecontract Waiting to matching !",
        });
      }
    },
  });

  return (
    <div>
      <div className="container">
        <div class="card text-center">
          <div class="card-header">ข้อมูลผู้ว่าจ้างที่รอการจับคู่ </div>
          <div class="card-body">
            <div className="row ">
              {requestItem.length > 0 && (
                <RequestMatchingItem requestItem={requestItem} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HirecontractsWaiting;
