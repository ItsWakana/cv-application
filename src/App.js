import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import style from './styles/style.css';
import React, { Component } from 'react';
import PDFGenerator from "./components/PDF";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      workExperience: {},
      educationExperience: {},

      //instead of storing the status of the form completion in the app file. It would make more sense to store the boolean state in each component and then when we submit or change it we can pass that data in to the methods below.
      formCompletion: [
        { personalInfo: false },
        { workExperience: false },
        { educationExperience: false } 
      ]
    }

    this.setPersonalInfo = this.setPersonalInfo.bind(this);
    this.setWorkExperience = this.setWorkExperience.bind(this);
    this.setEducationExperience = this.setEducationExperience.bind(this);
    this.displayFormDetails = this.displayFormDetails.bind(this);
    this.setWorkFormCompletion = this.setWorkFormCompletion.bind(this);
    this.setPersonalFormCompletion = this.setPersonalFormCompletion.bind(this);
    this.setEducationFormCompletion = this.setEducationFormCompletion.bind(this);

  }

  setPersonalFormCompletion() {
    this.setState((prevState) => {
      return {
        formCompletion: [
          { personalInfo: true },
          prevState.formCompletion[1],
          prevState.formCompletion[2]
        ]
      }
    });
  }

  setPersonalInfo(newData) {

    this.setState({
      personalInfo: newData,
    });
  }

  setWorkFormCompletion() {
    this.setState((prevState) => {
      return {
        formCompletion: [
          prevState.formCompletion[0],
          { workExperience: true },
          prevState.formCompletion[2]
        ]
      }
    });
  }
  setWorkExperience(newData) {
    this.setState({
      workExperience: newData
    });
  }

  setEducationFormCompletion() {
    this.setState((prevState) => {
      return {
        formCompletion: [
          prevState.formCompletion[0],
          prevState.formCompletion[1],
          { educationExperience: true }
        ]
      }
    });

  }

  setEducationExperience(newData) {
    this.setState({
      educationExperience: newData
    });
  }

  displayFormDetails() {
    this.setState({
      displayDetails: true,
    });
  }

  render() {
    return (
      <div className="cv-form">
        <h1 className="cv-form__heading">CV Form</h1>
        <PersonalInfo parseData={this.setPersonalInfo}
        formCompleted={this.setPersonalFormCompletion}/>
        <WorkExperience parseData={this.setWorkExperience}
        formCompleted={this.setWorkFormCompletion}/>
        <EducationExperience parseData={this.setEducationExperience}
        formCompleted={this.setEducationFormCompletion}/>
        <PDFGenerator cvInfo={this.state}/>
      </div>
    )
  }
}


export default App;
