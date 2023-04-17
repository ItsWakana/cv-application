import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import style from './styles/style.css';
import React, { Component, useState } from 'react';
import PDFGenerator from "./components/PDF";

const App = () => {

  const [userDetail, setUserDetail] = useState({
    personalInfo: {},
    workExperience: {},
    educationExperience: {}
  });

  const [formCompleted, setFormCompleted] = useState({
    personalInfo: false,
    workExperience: false,
    educationExperience: false,
  });

  const setFormCompletion = (propName, isCompleted) => {
    if (isCompleted) {
      
      setFormCompleted({
        ...formCompleted,
        [propName]: true
      });
    } else {
        setFormCompleted({
          ...formCompleted,
          [propName]: false
        })
    }
  }

  const setFormInfo = (newData, propName) => {
    setUserDetail({
      ...userDetail,
      [propName]: newData,
    })
  }

  return (
    <div className="cv-form">
      <h1 className="cv-form__heading">CV Form</h1>
      <PersonalInfo parseData={setFormInfo}
      formCompleted={setFormCompletion}/>
      <WorkExperience parseData={setFormInfo}
      formCompleted={setFormCompletion}/>
      <EducationExperience parseData={setFormInfo}
      formCompleted={setFormCompletion}/>
      <PDFGenerator formStatus={formCompleted} 
      cvInfo={userDetail}/>
    </div>
  )
}

export default App;