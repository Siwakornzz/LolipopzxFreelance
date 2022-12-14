import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_HIRECONTRACTS } from "../../apollo/queries";
import CarouselHirecontract from "./CarouselHirecontract";
import HirecontractTable from "./hirecontractsTable/hirecontractTable";

const Hirecontracts = () => {
  const [subconData, setSubconData] = useState({});
  const { data } = useQuery(QUERY_HIRECONTRACTS, {
    onCompleted: (data) => {
      setSubconData(data.hirecontracts);
    },
  });
  console.log(data);
  return (
    <>
      <CarouselHirecontract />
      <div class="container">
        <div class="row g-3">
          {subconData.length > 0 ? (
            <>
              <HirecontractTable categorydata={subconData} />
            </>
          ) : (
            <>
              <p class="text-center mt-5">
                {" "}
                ไม่พบรายการที่ต้องการโปรดลองใหม่อีกครั้ง ในภายหลัง !{" "}
              </p>
            </>
          )}
        </div>
      </div>  
    </>
  );
};

export default Hirecontracts;
