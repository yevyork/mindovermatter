import React from 'react';
import './styles/Curate.css'
import CurateForm from '../forms/CurateForm'

class Curate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='curate-container'>
        <div className='curate-text-container'>
        <p className='curate-text curate-melodic'>"The world of melodic techno is always <br></br><br></br> <span className='expand'> expanding</span>."</p><br></br><br></br>
        <p className='curate-text curate-strive'>As we strive to bring you the talent you want to hear and see live, our minds are open to your input.</p>
        <p className='curate-text curate-improve'>At the same time, we're always looking to improve the experience that we provide</p>
        <p className='curate-text curate-provided'>Please use the provided fields to leave feedback.</p>
        </div>
        <div className="curate-form">
            <CurateForm />
            </div>
        </div> 
        );
    }
}
 
export default Curate;