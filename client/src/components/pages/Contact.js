import React from 'react';
import '../pages/contact.css';

export default class Form extends React.Component {
    state = {
        contactName: '',
        email: '',
        enquiryDescription: '',
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            contactName: '',
            email: '',
            enquiryDescription: '' 
        });
        this.props.onChange({
            contactName: '',
            email: '',
            enquiryDescription: ''
        });
    };

    render() {
        return (
            <div className = "formBox">
            <form>
                <input 
                name="contactName"
                placeholder= 'Contact Name' 
                value={this.state.contactName} 
                onChange={e => this.change(e)} 
                />
                <br />
                <input 
                name="email"
                placeholder= 'Email Address' 
                value={this.state.email} 
                onChange={e => this.change(e)} 
                />
                <br/>
                <input 
                name="enquiryDescription"
                placeholder= 'How would you like your skull styled?' 
                value={this.state.enquiryDescription} 
                onChange={e => this.change(e)} 
                />
                <br />

                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
            </div>
        );
    }

}