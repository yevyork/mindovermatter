import React from "react";
import ContactForm from "../forms/ContactForm";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inbox: [],
      name: "",
      contact_info: "",
      subject: "",
      message: ""
    };
  }



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = async e => {
    e.preventDefault();
    await axios.post("/contacts");
    this.setState({
      name: "",
      contact_info: "",
      subject: "",
      message: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <ContactForm
          messages={this.state.inbox}
          handleChange={this.handleChange}
          handleSubmit={this.handleAdd}
        />
      </>
    );
  }
}

export default Contact;
