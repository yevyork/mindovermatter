import React from 'react';
import MerchForm from '../forms/MerchForm'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
class AddMerch extends React.Component {
    handleAdd = async (event, formInputs) => {
        event.preventDefault();
        await axios.post("/merches", formInputs);
        this.setState({
            formInputs:{
                img_url: "",
                title: "",
                description: "",
                link_to_merch: ""
            }
        })
    };

    render() { 
        return (  
            <div className='addmerch-container'>
                <Link className='back'to='/merchconsole'>Back</Link>
        <br></br>
            <h3>FILL OUT TO ADD A PRODUCT ↓</h3>
            <MerchForm
            handleSubmit = {this.handleAdd} />
            </div>
        )
    }
}

export default AddMerch
