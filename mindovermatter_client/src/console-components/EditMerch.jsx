import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/ContactMessages.css'
class EditMerch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            img_url: '',
            title: '',
            description: '',
            link_to_merch: ''
        
      }
    }


    componentDidMount() {
      this.getMerchDetails()

    }

    getMerchDetails=()=> {
      let merchId = this.props.match.params.id
      axios(`/merches/${merchId}`)
      .then(response => {
        this.setState({ 
            id: response.data.id,
            img_url: response.data.img_url,
            title: response.data.title,
            description: response.data.description,
            link_to_merch: response.data.link_to_merch
      })
      
    }
      )}

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      onSubmit=(e)=> {
        const newMerch = {
          img_url: this.refs.img_url.value,
          title: this.refs.title.value,
          description: this.refs.description.value,
          link_to_merch: this.refs.link_to_merch.value
        }
        console.log(newMerch)
        this.handleUpdate(newMerch);
        
        e.preventDefault();
      } 

handleUpdate = (newMerch) => {
  axios.request({
    method: 'put',
    url:`/merches/${this.state.id}`,
    data: newMerch
  }).then(response => {
    this.props.history.push('/merchconsole');
  }).catch(err => console.log(err))
} 
  

    render() { 
      console.log(this.state)
      return (
        <div className="form-container">
          <h3>Edit Merch</h3>
          <Link className='back'to='/merchconsole'>Back</Link>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="img_url"/>
            <input
              placeholder="Picture - MUST END w/(jpg/png/gif, etc.) or it wont render"
              value={this.state.img_url}
              name="img_url"
              required
              onChange={this.handleChange}
              ref='img_url'
            />
            <label htmlFor="title"/>
            <input
              placeholder="Title - required"
              value={this.state.title}
              name="title"
              required
              onChange={this.handleChange}
              ref='title'
            />
            <label htmlFor="description"/>
            <input
              placeholder="Description"
              value={this.state.description}
              name="description"
              onChange={this.handleChange}
              ref='description'
            />
            <label htmlFor="link_to_merch"/>
            <input
              placeholder="Link to item - required"
              value={this.state.link_to_merch}
              name="link_to_merch"
              required
              onChange={this.handleChange}
              ref='link_to_merch'
            />
            <input type="submit" value="Save" />
          </form>
        </div>
        )
    }
}

export default EditMerch
