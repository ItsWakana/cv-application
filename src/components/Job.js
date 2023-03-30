import React, { Component } from 'react';

class Job extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: ''
        }

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);

    }

    handleCompanyChange(e) {
        this.setState({
            company: e.target.value,
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }

    render() {

        const { title, company } = this.state;
        return (
            <div className="job-info">
                <h3 className="job-info__heading">Job Info</h3>
                <div className="job-info__input-container">
                    <input type="text" value={title} onChange={this.handleTitleChange} placeholder="Job Title"></input>
                </div>
                <div className="job-info__input-container">
                    <input type="text" value={company} onChange={this.handleCompanyChange} placeholder="Company"></input>
                </div>
            </div>
        )
    }
}

export default Job;