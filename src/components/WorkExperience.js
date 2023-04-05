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

    //instead of passing in the mapped index as a prop, we want to give each job a unique identifier so we can access them independent of the loop index. When we parse the job info, we just want to spread the id out with the rest of the existing properties. 

    // addJob() {
    //     const job = {}

    //     this.setState({
    //         jobs: [...this.state.jobs, job]
    //     });
    // }

    addJob() {
        const job = {id: uniqid()}

        this.setState({
            jobs: [...this.state.jobs, job]
        });
    }

    // parseJobInfo(index, obj) {
    //     const jobsCopy = [...this.state.jobs]
    //     jobsCopy[index] = obj;
    //     this.setState({
    //         jobs: jobsCopy,
    //     });

    //     console.log(this.state.jobs);
    // }
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

    // removeJob(index, obj) {
    //     const jobsCopy = [...this.state.jobs]
    //     jobsCopy.splice(index, 1);
    //     this.setState({
    //         jobs: jobsCopy,
    //     });
    // }

    removeJob(id, obj) {
       const updatedJobs = this.state.jobs.filter((job) => job.id !== id);

       this.setState({
            jobs: updatedJobs
       });
    }

    //we want this component to be like the central hub that holds the state for all the different work experiences the user wants to enter. So we could have some state that holds an array of all the work experience as objects. When the user clicks to add work experience we want to call on a component that creates a singular experience component.

    //we can map over the jobs array in state and create a new job component for each one. A new job could be added in state when the user clicks add job button.

    render() {
        return (
            <div className="work-experience">
                <h3 className="work-experience__heading">Work Experience</h3>
                {this.state.jobs.map((job) => (
                    <Job key={job.id} id={job.id} parseJob={this.parseJobInfo} removeJob={this.removeJob}/>
                    ))}
                <button className="work-experience__add-button" onClick={this.addJob}>Add Job</button>
            </div>
        )
    }
}

export default WorkExperience;