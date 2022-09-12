import { useQuery } from "@apollo/client";
import React,{ useState }  from "react";
import {  QUERY_SUBCONTRACTSWEBSITE } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Scraping = () => {
  const [webDevelopment, setWebdevelopment] = useState({});
  const { data } = useQuery(QUERY_SUBCONTRACTSWEBSITE, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setWebdevelopment(data.subcontractsdesktopwebsite);
    },
  });

  return (
    <>
      <div className="card">
        <div className="card-header text-center ">
          ข้อมูลผู้รับเหมาช่วง (Website Scraping)
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

export default Scraping;
