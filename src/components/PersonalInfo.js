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
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        const { name, age, address } = this.state;
        return (
            <form>
                <h3>Personal Info</h3>
                <input type="text" value={name} onChange={this.handleNameChange} placeholder="Name"></input>
            </form>
        )
    }
}

export default PersonalInfo;