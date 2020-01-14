import React from 'react';
import './Form.css'

const CurateForm = ({}) => (
    <div className="form-container">
    <form onSubmit={""}>
      <label />
      <input
        placeholder="Full Name"
        // value={"name"}
        name="name"
        required
        onChange={"handleChange"}
      />

      <label />
      <input
        placeholder="E-Mail"
        // value={"email"}
        name="email"
        required
        onChange={"handleChange"}
      />

      <label />
      <input
        placeholder="Phone"
        // value={"phone"}
        name="phone"
        required
        onChange={"handleChange"}
      />

<label />
      <textarea
        placeholder="We're listening."
        // value={"answer"}
        name="answer"
        required
        onChange={"handleChange"}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
)

export default CurateForm