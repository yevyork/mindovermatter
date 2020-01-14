import React from 'react';
import axios from 'axios'
import './styles/Merch.css'

class Merch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            merchList: []
         }
    }
    async componentDidMount() {
        try {
          const response = await axios(`http://localhost:3000/merches`);
          this.setState({ merchList: response.data });
        } catch (err) {
          console.error(err);
        }
      }
    render() { 
        const allmerch = this.state.merchList.map((merch, i) => {
            return(
                <div className='merch-container' key={i}>
                    <p className='merch-title'>{merch.title}</p>
                    <a href={merch.link_to_merch} target='_blank' rel="noopener noreferrer"><img className='merch-pic' src={merch.img_url} alt='clothing' /></a>
                    <p className='merch-description'>{merch.description}</p>
                </div>
            )
        })
        return ( 
        <>
    {allmerch}
        </> );
    }
}

export default Merch ;