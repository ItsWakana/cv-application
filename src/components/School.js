import React, { Component } from 'react';

class School extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolName: '',
            fieldOfStudy: '',
            dateOfStudy: '',
            isCompleted: false
        }

        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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

    handleDateChange(e) {
        this.setState({
            dateOfStudy: e.target.value,
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
        const { id, parseSchoolFunc } = this.props;

        for (const item in this.state) {
            if (this.state[item] === '') return;
        }

        this.setState({
            isCompleted: true
        });
        parseSchoolFunc(id, this.state);
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
            dateOfStudy
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
                        <h4>Date of Study: {dateOfStudy}</h4>
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
                <div className="school-info__input-container">
                    <input type="date" value={dateOfStudy} onChange={this.handleDateChange} placeholder="Date of Study"></input>
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