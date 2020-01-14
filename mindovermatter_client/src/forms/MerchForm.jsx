import React from "react";
import './Form.css'

const MerchForm = ({

}) => (
      <div className="form-container">
        <form onSubmit={""}>
          <label />
          <input
            placeholder="Picture of item"
            value={"img_url"}
            name="img_url"
            required
            onChange={"handleChange"}
          />

          <label />
          <input
            placeholder="Title"
            value={"title"}
            name="title"
            required
            onChange={"handleChange"}
          />

          <label />
          <textarea
            placeholder="Description"
            value={"description"}
            name="description"
            required
            onChange={"handleChange"}
          />

<label />
          <input
            placeholder="Link to item"
            value={"link_to_item"}
            name="link_to_item"
            required
            onChange={"handleChange"}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  
export default MerchForm;
