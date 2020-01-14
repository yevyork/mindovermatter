import React from "react";
import './Form.css'

const ContactForm = ({

}) => (
      <div className="form-container">
        <form onSubmit={""}>
          <label />
          <input
            placeholder="Name"
            // value={"name"}
            name="name"
            required
            onChange={"handleChange"}
          />

          <label />
          <input
            placeholder="E-mail"
            // value={"email"}
            name="email"
            required
            onChange={"handleChange"}
          />

          <label />
          <textarea
            placeholder="What's on your Mind?/What's the Matter?"
            // value={"message"}
            name="message"
            required
            onChange={"handleChange"}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  
export default ContactForm;
