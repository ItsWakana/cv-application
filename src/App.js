import PersonalInfo from "./components/PersonalInfo";
import WorkExperience from "./components/WorkExperience";
import style from './styles/style.css';
function App() {
  return (
    <div>
      {/* add a component here which renders a form for adding personal information like name, age, address and includes a save button and an edit button. */}

      {/* Personal Info component */}
      <PersonalInfo />
      {/* Work experience component */}
      <WorkExperience />
      {/* Education component */}

      
    </div>
    
  );
}

export default App;
