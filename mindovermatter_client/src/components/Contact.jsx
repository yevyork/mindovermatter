import React from "react";
import ContactForm from "../forms/ContactForm";
import axios from "axios";
import './styles/Contact.css'
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

  handleAdd = async (e, body) => {
    e.preventDefault();
    console.log(body)
    // let body = {
    //   name: this.state.name,
    //   contact_info: this.state.contact_info,
    //   subject: this.state.subject,
    //   message: this.state.message
    // };
    await axios.post("/contacts", body)
    
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact-container">
        <p className='contact-questions'>Questions? Comments? Compliments? Concerns? <br></br><br></br>These things matter to us. <br></br>Please fill out the fields below and we'll get back to you.</p>
      <div className='contact-form'>
        <ContactForm
          messages={this.state.inbox}
          handleChange={this.handleChange}
          handleSubmit={this.handleAdd}
        />
      </div>
      </div>
    );
  }
}

export default Contact;
