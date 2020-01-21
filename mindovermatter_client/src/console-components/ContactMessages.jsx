import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/ContactMessages.css'

class ContactMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            inbox: []
         }
    }

    async componentDidMount() {
        try {
            const response = await axios('/contacts')
            this.setState({ inbox: response.data})
        } catch(err) {
            console.error(err)
        }
    }

    handleDelete = (deletedMessage) => {
        fetch(`/contacts/${deletedMessage.id}`, {
           method: 'DELETE',
           headers: {
             'Accept': 'application/json, text/plain, */*',
             'Content-Type': 'application/json'
           }
         })
       .then(json => {
        document.location.reload(true);
         this.setState(state => {
           const msgg = state.inbox.filter((message, index) => message.id !== deletedMessage.id)
           return {
             msgg,
           }
         })
       })
       .catch(error => console.log(error))
      }


    render() { 
        const allMessages = this.state.inbox
        console.log(allMessages)
        const message = allMessages.map((msg, i) => {
            return (
            <div className='msg message' key = {i}>
                
                <p className='msg msg-name'>Name: {msg.name}</p>
                <p className='msg msg-contact'>Contact Info: {msg.contact_info}</p>
                <p className='msg msg-subject'>Subject:{msg.subject}</p>
                <p className='msg msg-msg'>Message: {msg.message}</p>
                <span className='msg timestamp'  key={msg.id}> <p>Sent on: </p> {msg.created_at.slice(0, 19).split('T').map(time=>(<p>{time}</p>))}</span>
                <button className='back' onClick={()=>this.handleDelete(msg)}>Delete</button>

            </div>
        )})
        return ( 
        <div>
                    <Link className='back'to='/console'>Back</Link>

            <h3>Messages:</h3>
            <p className='totalmsgs'>({this.state.inbox.length})</p>
        <div>{message}</div>
        </div>
        );
    }
}
 
export default ContactMessages;