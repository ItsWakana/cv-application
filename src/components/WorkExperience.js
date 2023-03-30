import React, { Component } from 'react';
import Job from './Job';

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
    }

    //we want this component to be like the central hub that holds the state for all the different work experiences the user wants to enter. So we could have some state that holds an array of all the work experience as objects. When the user clicks to add work experience we want to call on a component that creates a singular experience component.

    //we can map over the jobs array in state and create a new job component for each one. A new job could be added in state when the user clicks add job button.

    render() {
        return (
            <div className="work-experience">
                <h3 className="work-experience__heading">Work Experience</h3>
                <Job />
            </div>
        )
    }
}

export default WorkExperience;