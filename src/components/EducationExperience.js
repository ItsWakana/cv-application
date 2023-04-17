import React, { useState } from 'react';
import uniqid from 'uniqid';
import School from './School';

const EducationExperience = (props) => {

    const [education, setEducation] = useState([]);

    const addSchool = (e) => {
        e.preventDefault();

        const school = { id: uniqid() }

        setEducation([...education, school])

        props.parseData(education, 'educationExperience');
    }

    const parseSchoolInfo = (id, obj) => {
        const updatedSchools = education.map((school) => {
            if (school.id === id) {
                return { ...school, ...obj }
            } else {
                return school;
            }
        });

        setEducation(updatedSchools);

        props.parseData(updatedSchools, 'educationExperience');
    }

    const removeSchool = (id) => {
        const filteredEducation = education.filter((school) => school.id !== id);

        setEducation(filteredEducation);

        if (filteredEducation.length === 0) {
            props.formCompleted('educationExperience', false);
        }
        
        props.parseData(filteredEducation, 'educationExperience');
    }

    return (
        <div className="education-experience">
            <h3 className="education-experience__heading">Education</h3>
            {education.map((school) => (
                <School key={school.id} id={school.id} parseSchoolFunc={parseSchoolInfo} removeSchool={removeSchool}
                setFormCompletion={props.formCompleted}/>
                ))}
            <button className="education-experience__add-button" onClick={addSchool}>Add School</button>
        </div>
    )
}

export default EducationExperience;