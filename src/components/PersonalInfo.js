import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            address: '',
            isCompleted: false
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleAgeChange(e) {
        this.setState({
            age: e.target.value
        });
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
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
        const { name, age, address } = this.state;

        if (this.state.isCompleted) {
            return (
                <div className="personal-info" style={{color: 'white'}}>
                    <h3 className="personal-info__heading">Personal Info</h3>
                    <div className="personal-info__detail-container">
                        <h4>Name:</h4>
                        <p>{name}</p>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Age:</h4>
                        <p>{age}</p>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Address:</h4>
                        <p>{address}</p>
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
                    <input type="number" value={age} onChange={this.handleAgeChange} placeholder="Age"></input>
                </div>
                <div className="personal-info__input-container">
                    <input type="text" value={address} onChange={this.handleAddressChange} placeholder="Address"></input>
                </div>
                <div className="personal-info__button-container">
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default PersonalInfo;