import React, { Component } from 'react';

class Job extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            company: '',
            dateFrom: '',
            dateTo: '',
            isCompleted: false
        }

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDateFromChange = this.handleDateFromChange.bind(this);
        this.handleDateToChange = this.handleDateToChange.bind(this);
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

    handleDateFromChange(e) {
        this.setState({
            dateFrom: e.target.value,
        });
    }

    handleDateToChange(e) {
        this.setState({
            dateTo: e.target.value,
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
        const { id, parseJob, setFormCompletion } = this.props;

        for (const item in this.state) {
            if (this.state[item] === '') return;
        }

        this.setState({
            isCompleted: true
        });
        parseJob(id, this.state);
        setFormCompletion('workExperience', true);
    }

    deleteJob(e) {
        e.preventDefault();
        const { id, removeJob } = this.props;

        removeJob(id, this.state);
    }

    render() {
        const { title, company, dateFrom, dateTo } = this.state;

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
                    <div className="job-info__detail-container">
                        <h4>From: {dateFrom} To: {dateTo}</h4>
                    </div>
                    <div className="job-info__button-container">
                        <button className="job-info__edit-button" onClick={this.handleEdit}>Edit</button>
                        <button className="job-info__delete-button" onClick={this.deleteJob}>Delete</button>
                    </div>
                </div>
            )
        }
        return (
            <form className="job-info">
                <h4 className="job-info__heading">Job Info</h4>
                <div className="job-info__input-container">
                    <input type="text" value={title} onChange={this.handleTitleChange} placeholder="Job Title"></input>
                </div>
                <div className="job-info__input-container">
                    <input type="text" value={company} onChange={this.handleCompanyChange} placeholder="Company"></input>
                </div>
                <div class="job-info__date-container">
                    <div className="job-info__input-container">
                        <input type="date" value={dateFrom} onChange={this.handleDateFromChange}></input>
                    </div>
                    <div className="job-info__input-container">
                        <input type="date" value={dateTo} onChange={this.handleDateToChange}></input>
                    </div>
                </div>
                <div className="job-info__button-container">
                    <button className="job-info__add-button" type="submit" onClick={this.parseJob}>Add</button>
                    <button className="job-info__delete-button" onClick={this.deleteJob}>Delete</button>
                </div>
            </form>
        )
    }
}

export default Job;