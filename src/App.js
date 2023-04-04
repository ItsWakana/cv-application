import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import style from './styles/style.css';

import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="cv-form">
//       {/* add a component here which renders a form for adding personal information like name, age, address and includes a save button and an edit button. */}

//       {/* Personal Info component */}
//       <PersonalInfo />
//       {/* Work experience component */}
//       <WorkExperience />
//       {/* Education component */}
//       <EducationExperience />

      
//     </div>
    
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {},
      workExperience: {},
      educationExperience: {}
    }

    this.setPersonalInfo = this.setPersonalInfo.bind(this);
    this.setWorkExperience = this.setWorkExperience.bind(this);
    this.setEducationExperience = this.setEducationExperience.bind(this);
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

  render() {
    return (
      <div className="cv-form">
        <PersonalInfo parseData={this.setPersonalInfo}/>
        <WorkExperience parseData={this.setWorkExperience}/>
        <EducationExperience parseData={this.setEducationExperience}/>
      </div>
    )
  }
}


export default App;
