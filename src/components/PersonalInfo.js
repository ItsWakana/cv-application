import React, { useState } from 'react';

const PersonalInfo = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formInfo = [name, email, number];
        for (const prop in formInfo) {
            if (formInfo[prop] === '') return;
        }

        setIsCompleted(true);

        props.parseData({name, email, number, isCompleted}, 'personalInfo');
        props.formCompleted('personalInfo', true);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        setIsCompleted(false);
    }

    return (
        <>
            {isCompleted ? (
                <div className="personal-info" style={{color: 'white'}}>
                    <div className="personal-info__detail-container">
                        <h4>Name: {name}</h4>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Email: {email}</h4>
                    </div>
                    <div className="personal-info__detail-container">
                        <h4>Phone Number: {number}</h4>
                    </div>
                    <div className="personal-info__button-container">
                        <button className="personal-info__edit-button" onClick={handleEdit}>Edit</button>
                    </div>
                </div>                
            ) : (
                <form className="personal-info">
                    <div className="personal-info__input-container">
                        <input type="text" value={name} onChange={handleNameChange} placeholder="Name"></input>
                    </div>
                    <div className="personal-info__input-container">
                        <input type="text" value={email} onChange={handleEmailChange} placeholder="Email"></input>
                    </div>
                    <div className="personal-info__input-container">
                        <input type="number" value={number} onChange={handleNumberChange} placeholder="Phone"></input>
                    </div>
                    <div className="personal-info__button-container">
                        <button className="personal-info__submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>                
            )}
        </>
    )
}

export default PersonalInfo;