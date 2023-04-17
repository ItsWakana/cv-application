import React, { useState } from 'react';

const School = (props) => {

    const [schoolName, setSchoolName] = useState('');
    const [studyName, setStudyName] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [isCompleted, setIsCompleted] = useState('');

    const handleSchoolChange = (e) => {
        setSchoolName(e.target.value);
    }

    const handleStudyChange = (e) => {
        setStudyName(e.target.value);
    }

    const handleDateFromChange = (e) => {
        setDateFrom(e.target.value);
    }

    const handleDateToChange = (e) => {
        setDateTo(e.target.value);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        setIsCompleted(false);
    }

    const validInput = () => {
        const formDetails = [schoolName, studyName, dateFrom, dateTo];

        for (const prop in formDetails) {
            if (formDetails[prop] === '') return false;
        }

        return dateFrom < dateTo; 
    }

    const parseSchool = (e) => {
        e.preventDefault();
        const { id, parseSchoolFunc, setFormCompletion } = props;

        if (!validInput()) return;

        setIsCompleted(true);

        parseSchoolFunc(id, { schoolName, studyName, dateFrom, dateTo });
        setFormCompletion('educationExperience', true);

    }

    const deleteSchool = (e) => {
        e.preventDefault();
        const { id, removeSchool } = props;

        removeSchool(id);
    }

    return (
        <>
            {isCompleted ? (
                <div className="school-info" style={{color: 'white'}}>
                    <h3 className="school-info__heading">School Info</h3>
                    <div className="school-info__detail-container">
                        <h4>School/University Name: {schoolName}</h4>
                    </div>
                    <div className="school-info__detail-container">
                        <h4>Field of Study: {studyName}</h4>
                    </div>
                    <div className="school-info__detail-container">
                        <h4>From: {dateFrom} To: {dateTo}</h4>
                    </div>
                    <div className="school-info__button-container">
                        <button className="school-info__edit-button" onClick={handleEdit}>Edit</button>
                        <button className="school-info__delete-button" onClick={deleteSchool}>Delete</button>
                    </div>
                </div>
            ) : (
                <form className="school-info">
                    <h3 className="school-info__heading">School Info</h3>
                    <div className="school-info__input-container">
                        <input type="text" value={schoolName} onChange={handleSchoolChange} placeholder="School/University Name"></input>
                    </div>
                    <div className="school-info__input-container">
                            <input type="text" value={studyName} onChange={handleStudyChange} placeholder="Field of Study"></input>
                        </div>
                        <div className="school-info__date-container">
                        <div className="school-info__input-container">
                            <input type="date" value={dateFrom} onChange={handleDateFromChange}></input>
                        </div>
                        <div className="school-info__input-container">
                            <input type="date" value={dateTo} onChange={handleDateToChange}></input>
                        </div>
                    </div>
                    <div className="school-info__button-container">
                        <button className="school-info__add-button" type="submit" onClick={parseSchool}>Add</button>
                        <button className="school-info__delete-button" onClick={deleteSchool}>Delete</button>
                    </div>
                </form>
            )}
        </>
    )
}

export default School;