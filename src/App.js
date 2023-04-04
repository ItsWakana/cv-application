import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import style from './styles/style.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      workExperience: {},
      educationExperience: {},
      displayDetails: false,
    }

    this.setPersonalInfo = this.setPersonalInfo.bind(this);
    this.setWorkExperience = this.setWorkExperience.bind(this);
    this.setEducationExperience = this.setEducationExperience.bind(this);
    this.displayFormDetails = this.displayFormDetails.bind(this);
  }

  setPersonalInfo(newData) {
    this.setState({
      personalInfo: newData
    });
  }

  setWorkExperience(newData) {
    this.setState({
      workExperience: newData
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

    if (this.state.displayDetails) {
      return (
        <div className="cv-details">
          <h1 className="cv-details__heading">CV Details</h1>
          {/* <DisplayCV parseCV={this.state}/> */}
        </div>
      )
    }
    return (
      <div className="cv-form">
        <h1 className="cv-form__heading">CV Form</h1>
        <PersonalInfo parseData={this.setPersonalInfo}/>
        <WorkExperience parseData={this.setWorkExperience}/>
        <EducationExperience parseData={this.setEducationExperience}/>
        <button onClick={this.displayFormDetails}>Submit CV</button>
      </div>
    )
  }
}


export default App;
