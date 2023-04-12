import React, { Component } from 'react';

class School extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: '',
            fieldOfStudy: '',
            dateFrom: '',
            dateTo: '',
            isCompleted: false
        }

        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
        this.handleDateFromChange = this.handleDateFromChange.bind(this);
        this.handleDateToChange = this.handleDateToChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.parseSchool = this.parseSchool.bind(this);
        this.deleteSchool = this.deleteSchool.bind(this);


    }

    handleSchoolChange(e) {
        this.setState({
            schoolName: e.target.value,
        });
    }

    handleStudyChange(e) {
        this.setState({
            fieldOfStudy: e.target.value,
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

    handleEdit(e) {
        e.preventDefault();

        this.setState({
            isCompleted: false,
        });
    }

    parseSchool(e) {
        e.preventDefault();
        const { id, parseSchoolFunc, setFormCompletion } = this.props;

        for (const item in this.state) {
            if (this.state[item] === '') return;
        }

        this.setState({
            isCompleted: true
        });
        parseSchoolFunc(id, this.state);
        setFormCompletion('educationExperience', true);

    }

    deleteSchool(e) {
        e.preventDefault();
        const { id, removeSchool } = this.props;

        removeSchool(id);
    }

    render() {
        const {
            schoolName,
            fieldOfStudy,
            dateFrom,
            dateTo
        } = this.state;

        if (this.state.isCompleted) {
            return (
                <div className="school-info" style={{color: 'white'}}>
                    <h3 className="school-info__heading">School Info</h3>
                    <div className="school-info__detail-container">
                        <h4>School/University Name: {schoolName}</h4>
                    </div>
                    <div className="school-info__detail-container">
                        <h4>Field of Study: {fieldOfStudy}</h4>
                    </div>
                    <div className="school-info__detail-container">
                        <h4>From: {dateFrom} To: {dateTo}</h4>
                    </div>
                    <div className="school-info__button-container">
                        <button className="school-info__edit-button" onClick={this.handleEdit}>Edit</button>
                        <button className="school-info__delete-button" onClick={this.deleteSchool}>Delete</button>
                    </div>
                </div>
            )
        }
        return (
            <form className="school-info">
                <h3 className="school-info__heading">School Info</h3>
                <div className="school-info__input-container">
                    <input type="text" value={schoolName} onChange={this.handleSchoolChange} placeholder="School/University Name"></input>
                </div>
                <div className="school-info__input-container">
                        <input type="text" value={fieldOfStudy} onChange={this.handleStudyChange} placeholder="Field of Study"></input>
                    </div>
                    <div class="school-info__date-container">
                    <div className="school-info__input-container">
                        <input type="date" value={dateFrom} onChange={this.handleDateFromChange}></input>
                    </div>
                    <div className="school-info__input-container">
                        <input type="date" value={dateTo} onChange={this.handleDateToChange}></input>
                    </div>
                </div>
                <div className="school-info__button-container">
                    <button className="school-info__add-button" type="submit" onClick={this.parseSchool}>Add</button>
                    <button className="school-info__delete-button" onClick={this.deleteSchool}>Delete</button>
                </div>
            </form>
        )
    }
}

export default School;