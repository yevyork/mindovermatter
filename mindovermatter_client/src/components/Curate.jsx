import React from 'react';
import './styles/Curate.css'
import CurateForm from '../forms/CurateForm'

class Curate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
        <p className='curate-text curate-melodic'>"The world of melodic techno is always expanding"</p>
        <p className='curate-text curate-strive'>As we strive to bring you the talent you want to hear and see live, our minds are open to your input.</p>
        <p className='curate-text curate-improve'>At the same time, we're always looking to improve the experience that we provide</p>
        <p className='curate-text curate-provided'>Please use the provided fields to leave feedback.</p>
            <CurateForm />
        </> 
        );
    }
}
 
export default Curate;