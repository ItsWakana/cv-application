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

      formCompletion: {
        personalInfo: false,
        workExperience: false,
        educationExperience: false
      }
    }

    this.setFormCompletion = this.setFormCompletion.bind(this);
    this.setFormInfo = this.setFormInfo.bind(this);

  }


  setFormCompletion(propName, isCompleted) {
    if (isCompleted) {
      this.setState(prevState => ({
        formCompletion: {
          ...prevState.formCompletion,
          [propName]: true
        }
      }));
    } else {
      
      if (this.state[propName].length === 0) {
        this.setState(prevState => ({
          formCompletion: {
            ...prevState.formCompletion,
            [propName]: false
          }
        }));
      }
    }

  }

  setFormInfo(newData, propName) {
    this.setState({
      [propName]: newData,
    });
  }

  render() {
    return (
      <div className="cv-form">
        <h1 className="cv-form__heading">CV Form</h1>
        <PersonalInfo parseData={this.setFormInfo}
        formCompleted={this.setFormCompletion}/>
        <WorkExperience parseData={this.setFormInfo}
        formCompleted={this.setFormCompletion}/>
        <EducationExperience parseData={this.setFormInfo}
        formCompleted={this.setFormCompletion}/>
        <PDFGenerator cvInfo={this.state}/>
      </div>
    )
  }
}


export default App;
