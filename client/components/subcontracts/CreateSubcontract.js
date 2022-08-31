import React from "react";
import Help from "../help/Help";
import FormSubcontract from "./FormSubcontract";

const CreateSubcontracts = () => {
  return (
    <>
      <div class="container">
        <div class=" mt-4 me-4 ms-4 mb-4">
          <div class="row">
            <h4> เพิ่มงานที่รับทำ + </h4>

            <div class="col-md-8 mt-4 mt-2 ms-5 ms-5 mb-3">
              <FormSubcontract />
            </div>

            <Help />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSubcontracts;
