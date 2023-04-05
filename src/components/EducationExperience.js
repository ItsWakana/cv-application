import React, { Component } from 'react';
import uniqid from 'uniqid';
import School from './School';

class EducationExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            education: []
        }

        this.addSchool = this.addSchool.bind(this);
        this.parseSchoolInfo = this.parseSchoolInfo.bind(this);
        this.removeSchool = this.removeSchool.bind(this);
    }

    addSchool(e) {
        e.preventDefault();

        const school = { id: uniqid() }

        this.setState({
            education: [...this.state.education, school]
        });
    }

    parseSchoolInfo(id, obj) {
        const updatedSchools = this.state.education.map((school) => {
            if (school.id === id) {
                return { ...school, ...obj }
            } else {
                return school;
            }
        });

        this.setState({
            education: updatedSchools
        });

        this.props.parseData(updatedSchools);
    }

    removeSchool(id) {
        const filteredEducation = this.state.education.filter((school) => school.id !== id);

        this.setState({
            education: filteredEducation,
        });
    }

    render() {
        return (
            <div className="education-experience">
                <h3 className="education-experience__heading">Education</h3>
                {this.state.education.map((school) => (
                    <School key={school.id} id={school.id} parseSchoolFunc={this.parseSchoolInfo} removeSchool={this.removeSchool}/>
                    ))}
                <button className="education-experience__add-button" onClick={this.addSchool}>Add School</button>
            </div>
        )
    } 
}

export default EducationExperience;