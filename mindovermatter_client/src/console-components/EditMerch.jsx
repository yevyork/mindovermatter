import React from "react";
import MerchForm from "../forms/MerchForm";

function EditMerch(props) {
    console.log(props)
  return (
    <>



    EDIT MERCH
      <MerchForm
        merch={props.merch}
        toggleForm={props.toggleForm}
        handleSubmit={props.handleSubmit}
        handleUpdate={props.handleUpdate}
        handleChange={props.handleChange}
        updateID={props.updateID}
      />
    </>
  );
}

export default EditMerch;
