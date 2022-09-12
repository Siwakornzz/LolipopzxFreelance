import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTSIT } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Itsolution = () => {
  const [webDevelopment, setWebdevelopment] = useState({});
  const { data } = useQuery(QUERY_SUBCONTRACTSIT, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setWebdevelopment(data.subcontractsit);
    },
  });

  return (
    <>
      <div className="card">
        <div className="card-header text-center ">
          ข้อมูลผู้รับเหมาช่วง (IT Solution)
        </div>
      </div>

      {webDevelopment.length > 0 ? (
        <>
          <CategoryItem categorydata={webDevelopment} />
        </>
      ) : (
        <>
          <p class="text-center mt-5">
            {" "}
            ไม่พบรายการที่ต้องการโปรดลองใหม่อีกครั้ง ในภายหลัง !{" "}
          </p>
        </>
      )}
    </>
  );
};

export default Itsolution;
