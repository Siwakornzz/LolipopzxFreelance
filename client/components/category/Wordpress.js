import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_SUBCONTRACTWORDPRESS } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Wordpress = () => {
  const [wordPress, setWordPress] = useState({});
  const { data } = useQuery(QUERY_SUBCONTRACTWORDPRESS, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setWordPress(data.subcontractswordpress);
    },
  });

  console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-header text-center ">
          ข้อมูลผู้รับเหมาช่วง (Wordpress)
        </div>
      </div>

      {wordPress.length > 0 ? (
        <>
          <CategoryItem categorydata={wordPress} />
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

export default Wordpress;
