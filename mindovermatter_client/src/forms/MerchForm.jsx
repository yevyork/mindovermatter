import React from "react";
import "./Form.css";
import { Redirect } from 'react-router-dom'


class MerchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchList: [],
      img_url: "",
      title: "",
      description: "",
      link_to_merch: ""
    };
  }





  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(e, {
      img_url: this.state.img_url,
      title: this.state.title,
      description: this.state.description,
      link_to_merch: this.state.link_to_merch
    });
    this.setState({
      img_url: "",
      title: "",
      description: "",
      link_to_merch: ""
    });
    
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="img_url">Image URL</label>
          <input
            placeholder="MUST END w/(jpg/png/gif, etc.) or it wont render"
            value={this.state.img_url}
            name="img_url"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="title">Item Title</label>
          <input
            placeholder="Title - required"
            value={this.state.title}
            name="title"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="description">Item Description</label>
          <input
            placeholder="Description"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <label htmlFor="link_to_merch">Link to Purchase</label>
          <input
            placeholder="Link to item - required"
            value={this.state.link_to_merch}
            name="link_to_merch"
            required
            onChange={this.handleChange}
          />
          <input type="submit" value={this.state.id ? "Update" : "Add"} />
        </form>
      </div>
    );
  }
}

export default MerchForm;

//value={this.state.link_to_merch || (this.state.currentMerch && this.state.currentMerch.link_to_merch)
