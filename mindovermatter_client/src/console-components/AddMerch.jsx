import React from 'react';
import MerchForm from '../forms/MerchForm'

function AddMerch(props) {



        return ( <>
        
        <MerchForm
        merch = {props.merch}
        handleSubmit = {props.handleSubmit}
        // handleChange = {props.handleChange}
        // handleDelete = {props.handleDelete}
        />
        
        </> );
    }

 
export default AddMerch;


