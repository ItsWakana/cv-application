import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            address: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
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

    render() {
        const { name, age, address } = this.state;
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
            </form>
        )
    }
}

export default PersonalInfo;