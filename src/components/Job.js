import React, { Component } from 'react';

class Job extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: '',
            isCompleted: false
        }

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.parseJob = this.parseJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);

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

    handleSubmit(e) {
        e.preventDefault();
    }

    handleEdit(e) {
        e.preventDefault();

        this.setState({
            isCompleted: false,
        });
    }

    parseJob(e) {
        e.preventDefault();
        const { id, parseJob } = this.props;

        for (const item in this.state) {
            if (this.state[item] === '') return;
        }

        this.setState({
            isCompleted: true
        });
        parseJob(id, this.state);
    }

    deleteJob(e) {
        e.preventDefault();
        const { id, removeJob } = this.props;

        removeJob(id, this.state);
    }

    render() {
        const { title, company } = this.state;

        if (this.state.isCompleted) {
            return (
                <div className="job-info" style={{color: 'white'}}>
                    <h3 className="job-info__heading">Job Info</h3>
                    <div className="job-info__detail-container">
                        <h4>Job Title: {title}</h4>
                    </div>
                    <div className="job-info__detail-container">
                        <h4>Company: {company}</h4>
                    </div>
                    <div className="job-info__button-container">
                        <button className="edit-button" onClick={this.handleEdit}>Edit</button>
                        <button onClick={this.deleteJob}>Delete</button>
                    </div>
                </div>
            )
        }
        return (
            <form className="job-info">
                <h3 className="job-info__heading">Job Info</h3>
                <div className="job-info__input-container">
                    <input type="text" value={title} onChange={this.handleTitleChange} placeholder="Job Title"></input>
                </div>
                <div className="job-info__input-container">
                    <input type="text" value={company} onChange={this.handleCompanyChange} placeholder="Company"></input>
                </div>
                <div className="job-info__button-container">
                    <button type="submit" onClick={this.parseJob}>Add</button>
                    <button onClick={this.deleteJob}>Delete</button>
                </div>
            </form>
        )
    }
}

export default Job;