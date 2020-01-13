import React from "react";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {
    return <>
    
    </>;
  }
}

export default AddEvent;
