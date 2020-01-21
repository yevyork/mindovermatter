import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/Console.css'

class MerchConsole extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            merchList: [],
                formInputs: {
                id: "",
                img_url: "",
                title: "",
                description: "",
                link_to_merch: ""
            },
        }
        }

        componentDidMount() {
            this.getMerch();
            console.log(this.state)
        }

        async getMerch() {
            const response = await axios(`/merches`);
            const data = response.data;
            this.setState({ merchList: data,
                id: data.id,
                img_url: data.img_url,
                title: data.title,
                description: data.description,
                link_to_merch: data.link_to_merch
            });
    }

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


    render() { 
        console.log(this.state.id)
        const totalItemsForSale = this.state.merchList.length
        const renderMerch = 
            this.state.merchList.map(item => (
                
                <div className="console-merchlist" key={item.id}>
                    <p className="console-merchtitle">{item.title}</p>
                    <img
                        className="console-merchimage"
                        src={item.img_url}
                        alt="merchthumb"
                    />
                    <Link to={`/editmerch/${item.id}`} className="console-link">edit</Link>
                    <button className="console-button" onClick={() => this.handleDelete(item)}>DEL</button>
                    

        </div>
            ))
        return ( 
        <div className='merch-console-container'>
            <Link className='back' to='/console'>Back</Link>
            <Link className='back' to='/AddMerch'>Add Merch</Link>
            <p className='amt-for-sale'> # for sale: {totalItemsForSale}</p>
            {renderMerch}</div>
        );
    }
}

export default MerchConsole;