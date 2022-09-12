import React from "react";
import ManagetaskTable from "./table/ManagetaskTable";



const Managetask = () => {
  return (
    <>
     <div class="card-body ms-5">
        <div class="mt-5">
          <h4 class="text-center">ข้อมูลการทำงานของแต่ละคำร้อง </h4>
        </div>
        <div>
          <ManagetaskTable />
        </div>
      </div>
    </>
  );
};

export default Managetask;
