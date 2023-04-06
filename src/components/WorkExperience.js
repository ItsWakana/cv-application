import React, { Component } from 'react';
import uniqid from 'uniqid';
import Job from './Job';

class WorkExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }

        this.addJob = this.addJob.bind(this);
        this.parseJobInfo = this.parseJobInfo.bind(this);
        this.removeJob = this.removeJob.bind(this);
    }

    addJob() {
        const job = {id: uniqid()}

        this.setState({
            jobs: [...this.state.jobs, job]
        });

        this.props.parseData(this.state);
    }

    parseJobInfo(id, obj) {

        const updatedJobs = this.state.jobs.map((job) => {
            if (job.id === id) {
                return { ...job, ...obj }
            } else {
                return job;
            }
        });

        this.setState({
            jobs: updatedJobs,
        });

        this.props.parseData(updatedJobs)
    }

    removeJob(id, obj) {
       const updatedJobs = this.state.jobs.filter((job) => job.id !== id);

       this.setState({
            jobs: updatedJobs
       });

       this.props.parseData(updatedJobs);
    }

    //we want this component to be like the central hub that holds the state for all the different work experiences the user wants to enter. So we could have some state that holds an array of all the work experience as objects. When the user clicks to add work experience we want to call on a component that creates a singular experience component.

    //we can map over the jobs array in state and create a new job component for each one. A new job could be added in state when the user clicks add job button.

    render() {
        return (
            <div className="work-experience">
                <h3 className="work-experience__heading">Work Experience</h3>
                {this.state.jobs.map((job) => (
                    <Job key={job.id} id={job.id} parseJob={this.parseJobInfo} removeJob={this.removeJob} setFormCompletion={this.props.formCompleted}/>
                    ))}
                <button className="work-experience__add-button" onClick={this.addJob}>Add Job</button>
            </div>
        )
    }
}

export default WorkExperience;