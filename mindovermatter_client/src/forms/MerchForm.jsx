import React from "react";
import "./Form.css";

class MerchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      title: "",
      description: "",
      link_to_merch: ""
    };
  }
  
  async componentDidMount() {
    this.setState({
      merchObj:this.props.merchObj
    })
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
console.log(this.props.merchObj && this.props.merchObj.img_url)
  };

    // if(this.props.merch){
    //   this.setState ({
    //     // merchId: this.props.merch.id,
    //     img_url: this.props.merch.img_url,
    //     title: this.props.merch.title,
    //     description: this.props.merch.description,
    //     link_to_merch: this.props.merch.link_to_merch
    //   })
    // }
  

  // componentWillMount() {
  //   if(this.props.merch){
  //     this.setState ({
  //       img_url: this.props.merch.img_url || '',
  //       title: this.props.merch.title || '',
  //       description: this.props.merch.description || '',
  //       link_to_merch: this.props.merch.link_to_merch || ''
  //     })
  //   }
  // }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(e
      ,{
        img_url: this.state.img_url,
        title: this.state.title,
        description: this.state.description,
        link_to_merch: this.state.link_to_merch
      }
    )
    this.setState({
      img_url: "",
      title: "",
      description: "",
      link_to_merch: ""
    })
    // if(this.props.merch) {
    //   this.props.toggleForm()
    // }
  }
  render() {
   console.log(this.props)
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label />
          <input
            placeholder="Picture - MUST END w/(jpg/png/gif, etc.) or it wont render"
            value={this.state.img_url || (this.state.merchObj && this.state.merchObj.img_url)}
            name="img_url"
            required
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Title - required"
            value={this.state.title || (this.state.currentMerch && this.state.currentMerch.title)}
            name="title"
            required
            onChange={this.handleChange}
          />

          <label />
          <textarea
            placeholder="Description"
            value={this.state.description || (this.state.currentMerch && this.state.currentMerch.description)}
            name="description"
            onChange={this.handleChange}
          />

          <label />
          <input
            placeholder="Link to item - required"
            value={this.state.link_to_merch || (this.state.currentMerch && this.state.currentMerch.link_to_merch)}
            name="link_to_merch"
            required
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MerchForm;