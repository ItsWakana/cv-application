import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            isCompleted: false
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleNumberChange(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        for (const item in this.state) {
            if (this.state[item] === '') return;
        }

        this.setState({
            isCompleted: true
        });
    }

    handleEdit(e) {
        e.preventDefault();

        this.setState({
            isCompleted: false
        });
    }

    render() {
        const { name, email, phoneNumber } = this.state;

        if (this.state.isCompleted) {
            return (
                <div className="personal-info" style={{color: 'white'}}>
                    <h3 className="personal-info__heading">Personal Info</h3>
                    <div className="personal-info__detail-container">
                        <h4>Name:</h4>
                        <p>{name}</p>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Email:</h4>
                        <p>{email}</p>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Phone Number:</h4>
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="personal-info__button-container">
                        <button className="edit-button" onClick={this.handleEdit}>Edit</button>
                    </div>
                </div>
            )
        }

        return (
            <form className="personal-info">
                <h3 className="personal-info__heading">Personal Info</h3>
                <div className="personal-info__input-container">
                    <input type="text" value={name} onChange={this.handleNameChange} placeholder="Name"></input>
                </div>
                <div className="personal-info__input-container">
                    <input type="text" value={email} onChange={this.handleEmailChange} placeholder="Email"></input>
                </div>
                <div className="personal-info__input-container">
                    <input type="number" value={phoneNumber} onChange={this.handleNumberChange} placeholder="Phone"></input>
                </div>
                <div className="personal-info__button-container">
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default PersonalInfo;