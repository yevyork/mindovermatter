import React from "react";
import axios from "axios";
import "./styles/Merch.css";

class Merch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchList: []
    };
  }
  componentDidMount() {
    this.getMerch();
  }
  async getMerch() {
    const response = await axios(`/merches`);
    const data = response.data;
    this.setState({ merchList: data });
  }

  render() {
    const allmerch = this.state.merchList.map((merch, i) => {
      return (
        <div className="merch-container" key={i}>
          <p className="merch-title">{merch.title}</p>
          
            <img className="merch-pic" src={merch.img_url} alt="clothing" />
          
          <p className="merch-description">{merch.description}</p>
          <a className='buy'
            href={merch.link_to_merch}
            target="_blank"
            rel="noopener noreferrer"
          >GET </a>
        </div>
      );
    });
    return <div className="shop">{allmerch}</div>;
  }
}

export default Merch;
