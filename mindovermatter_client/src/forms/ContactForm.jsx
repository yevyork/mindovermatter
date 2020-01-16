import React from "react";
import './Form.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      contact_info: '',
      subject: '',
      message: ''
    }
  }
  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  // componentWillMount (){
  //   if(this.props.messages){
  //     this.setState ({
  //       name: this.props.messages.name,
  //       contact_info: this.props.messages.contact_info,
  //       subject: this.props.messages.subject,
  //       message: this.props.messages.message
  //     })
  //   }
  // }

  handleSubmit =(e) => {
    e.preventDefault()
    this.props.handleSubmit(
      e,
      {
        name: this.state.name,
        contact_info: this.state.contact_info,
        subject: this.state.subject,
        message: this.state.message
      }
    )
    this.setState({
      name: '',
      contact_info:'',
      subject: '',
      message: ''
    })
  }

render() {
  console.log(this.state)
  return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label />
          <input
            placeholder="Name"
            value={this.state.name}
            name="name"
            required
            onChange={this.handleChange}
          />

<label />
          <input
            placeholder="Contact Details (Email/Phone)"
            value={this.state.contact_info}
            name="contact_info"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Subject"
            value={this.state.subject}
            name="subject"
            required
            onChange={this.handleChange}
          />

          <label />
          <textarea
            placeholder="What's on your Mind?/What's the Matter?"
            value={this.state.message}
            name="message"
            required
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
