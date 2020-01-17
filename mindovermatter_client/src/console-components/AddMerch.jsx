import React from 'react';
import MerchForm from '../forms/MerchForm'

function AddMerch(props) {



        return ( <>
        <br></br>
        <h3>FILL OUT TO ADD A PRODUCT ↓</h3>
        <MerchForm
        merch = {props.merch}
        handleSubmit = {props.handleSubmit}
        // handleChange = {props.handleChange}
        // handleDelete = {props.handleDelete}
        />
        
        </> );
    }

 
export default AddMerch;


