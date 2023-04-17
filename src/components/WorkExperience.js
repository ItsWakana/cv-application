import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Job from './Job';


const WorkExperience = (props) => {

    const [jobs, setJobs] = useState([]);

    const addJob = () => {
        const job = { id: uniqid() }

        setJobs([...jobs, job]);

        props.parseData(jobs, 'workExperience');
    }

    const parseJobInfo = (id, obj) => {

        const updatedJobs = jobs.map((job) => {
            if (job.id === id) {
                return { ...job, ...obj }
            } else {
                return job;
            }
        });

        setJobs(updatedJobs);

        props.parseData(updatedJobs, 'workExperience');
    }
    
    const removeJob = (id, obj) => {
        const updatedJobs = jobs.filter((job) => job.id !== id);

        setJobs(updatedJobs);

        props.parseData(updatedJobs, 'workExperience');
        if (updatedJobs.length === 0) {
            props.formCompleted('workExperience', false)
        }
    }

    return (
        <div className="work-experience">
            <h3 className="work-experience__heading">Work Experience</h3>
            {jobs.map((job) => (
                <Job key={job.id} id={job.id} parseJob={parseJobInfo} removeJob={removeJob} setFormCompletion={props.formCompleted}/>
                ))}
            <button className="work-experience__add-button" onClick={addJob}>Add Job</button>
        </div>
    )
}

export default WorkExperience;