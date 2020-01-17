import React from "react";
import "./Form.css";
import Input from "./Input";
import axios from "axios";

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

  async componentDidMount() {
    this.getMerch();

    if (this.state.merchList) {
      this.setState({
        img_url: this.props.merch.img_url,
        title: this.props.merch.title,
        description: this.props.merch.description,
        link_to_merch: this.props.merch.link_to_merch,
        id: this.props.merch.id
      });
    }
  }

  async getMerch() {
    const response = await axios(`/merches`);
    const data = response.data;
    this.setState({ merchList: data });
  }
  // console.log(this.props)
  //     await fetch(`http://localhost:3000/merches/${this.props.updateID}`, {
  //       // body: JSON.stringify(formInputs),
  //       method: "GET",

  //     })
  //     .then(e=>{
  //       return e.json()
  //     })
  //       .then(updatedMerch => {
  //         this.setState({currentMerch: updatedMerch})
  //       })
  //       .catch(error => console.log(error));

  // if(this.props.merch){
  //   this.setState ({
  //     // merchId: this.props.merch.id,
  //     img_url: this.props.merch.img_url,
  //     title: this.props.merch.title,
  //     description: this.props.merch.description,
  //     link_to_merch: this.props.merch.link_to_merch
  //   })
  // }

  componentWillMount() {
    if (this.state.merchList) {
      this.setState({
        img_url: this.state.merchList.img_url || "",
        title: this.state.merchList.title || "",
        description: this.state.merchList.description || "",
        link_to_merch: this.state.merchList.link_to_merch || "",
        id: this.state.merchList.id || ""
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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
    if (this.props.merch) {
      this.props.toggleForm();
    }
  };

  render() {
 
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label />
          <Input
            placeholder="Picture - MUST END w/(jpg/png/gif, etc.) or it wont render"
            value={this.props.img_url}
            name="img_url"
            required
            handleChange={this.handleChange}
          />
          <label />
          <Input
            placeholder="Title - required"
            value={this.state.title}
            name="title"
            required
            handleChange={this.handleChange}
          />
          <label />
          <Input
            placeholder="Description"
            value={this.state.description}
            name="description"
            handleChange={this.handleChange}
          />
          <label />
          <Input
            placeholder="Link to item - required"
            value={this.state.link_to_merch}
            name="link_to_merch"
            required
            handleChange={this.handleChange}
          />
          <input type="submit" value={this.state.id ? "Update" : "Add"} />
        </form>
      </div>
    );
  }
}

export default MerchForm;

//value={this.state.link_to_merch || (this.state.currentMerch && this.state.currentMerch.link_to_merch)
