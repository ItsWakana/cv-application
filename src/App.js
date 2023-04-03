import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import style from './styles/style.css';
function App() {
  return (
    <div className="cv-form">
      {/* add a component here which renders a form for adding personal information like name, age, address and includes a save button and an edit button. */}

      {/* Personal Info component */}
      <PersonalInfo />
      {/* Work experience component */}
      <WorkExperience />
      {/* Education component */}
      <EducationExperience />

      
    </div>
    
  );
}

export default App;
