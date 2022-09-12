import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTS } from "../../apollo/queries";

import CarouselSubcontract from "./CarouselSubcontract";
import SubcontractsTable from "./TableSubcontract/SubcontractsTable";

const Subcontracts = () => {
  const [subconData, setSubconData] = useState({});
  const { data} = useQuery(QUERY_SUBCONTRACTS, {
    onCompleted: (data) => {
      setSubconData(data.subcontracts);
    },
  });
  console.log(data);

  
  return (
    <>
      <CarouselSubcontract />
      <div class="container">
        <div class="row g-3">
          {subconData.length > 0 ? (
            <>
              <SubcontractsTable categorydata={subconData} />
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

export default Subcontracts;
