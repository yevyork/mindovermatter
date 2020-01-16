import React from "react";
import AddMerch from "./AddMerch";
import EditMerch from "./EditMerch";
import ConsoleNav from './ConsoleNav'
import axios from "axios";
import "./styles/Console.css";

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      merchList: [],
      formVisible: false,
      formInputs: {
        img_url: "",
        title: "",
        description: "",
        link_to_merch: ""
      },
    //   updateID:''
    };
  }
  componentDidMount() {
    // alert('ADMIN CONSOLE: YOUR IP AND DEVICE LOCATION HAVE BEEN LOGGED')
    this.getMerch();
  }

  async getMerch() {
    const response = await axios(`/merches`);
    const data = response.data;
    this.setState({ merchList: data });
  }

  toggleForm = (obj) => {
      console.log(obj)
    this.setState({ 
        formVisible: !this.state.formVisible,
        merchObj: obj
    });
  };

  handleAdd = async (event, formInputs) => {
    event.preventDefault();
    await axios.post("/merches", formInputs);
    this.setState({
      formInputs: {
        img_url: "",
        title: "",
        description: "",
        link_to_merch: ""
      }
    });
    console.log(this.state);
    this.getMerch();
  };

  handleDelete = deletedMerch => {
    fetch(`/merches/${deletedMerch.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(json => {
        document.location.reload(true);
        this.setState(state => {
          const merch = state.merchList.filter(
            (merch, index) => merch.id !== deletedMerch.id
          );

          return {
            merch
          };
        });
      })
      .catch(error => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    fetch(`/merch/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(updatedMerch => {
        this.getMerch();
      })
      .catch(error => console.log(error));
  };

  render() {
    const amtOfMerch = this.state.merchList.length;
    const consoleMerchList = this.state.merchList.map(merch => (
      <div className="console-merchlist" key={merch.id}>
        <p className="console-merchtitle">{merch.title}</p>
        <img
          className="console-merchimage"
          src={merch.img_url}
          alt="merchthumb"
        />
        <button
          className="console-button"
          onClick={() => this.handleDelete(merch)}
        >
          DELETE
        </button>

        <button className="console-button" onClick={()=>this.toggleForm(merch)}>
          <p className="pencil">✐</p>
        </button>
      </div>
    ));
    return (
      <>
      <ConsoleNav />
        <h1 className="admin-console">
            
          MERCH SECTION<br></br>
          <br></br>
        </h1>
        # CURRENTLY FOR SALE: {amtOfMerch}<br></br>
        Once deleted, it cannot be undone- <br></br>must be re-added to restore
        {consoleMerchList}
        FILL OUT TO ADD MERCH
        <div className="console-merchform">
          <AddMerch
            merch={this.state.merchList}
            handleSubmit={this.handleAdd}
          />
          {this.state.formVisible ? <EditMerch 
            merch={this.state.merchList}
            handleUpdate={this.handleUpdate}
            toggleForm={this.toggleForm}
            merchObj={this.state.merchObj}
          /> : null}
        </div>
      </>
    );
  }
}

export default Console;
