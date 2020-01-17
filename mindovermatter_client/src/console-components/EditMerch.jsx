import React from "react";
import MerchForm from "../forms/MerchForm";

class EditMerch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: {
      img_url: this.props.merch.img_url,
      title: this.props.merch.title,
      description: this.props.merch.description,
      link_to_merch: this.props.merch.link_to_merch,
      id: this.props.merch.id
      }
   

    };
  }
  render() {
    const { merch, toggleForm, handleSubmit, handleUpdate, handleChange, id } = this.props
    return (
      <>
        <h3>EDIT MERCH ↓ </h3>
        <MerchForm
        id={id}
          merch={merch}
          toggleForm={toggleForm}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          handleChange={handleChange}
        />
      </>
    );
  }
}
export default EditMerch;
