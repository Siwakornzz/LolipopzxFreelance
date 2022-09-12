import { useQuery } from "@apollo/client";
import React,{ useState }  from "react";
import { QUERY_SUBCONTRACTSCHATBOT } from "../../apollo/queries";
import CategoryItem from "./CategoryItem";

const Chatbot = () => {
  const [webDevelopment, setWebdevelopment] = useState({});
  const { data } = useQuery(QUERY_SUBCONTRACTSCHATBOT, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setWebdevelopment(data.subcontractschatbot);
    },
  });

  return (
    <>
      <div className="card">
        <div className="card-header text-center ">
          ข้อมูลผู้รับเหมาช่วง (Chatbot)
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

export default Chatbot;
