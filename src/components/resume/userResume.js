import React from 'react'
import ResumeItem from './resumeItem';

export default function UserResume(props) {


    const resumeData = props.data;
    // console.log(resumeData)
    return (
        <>
            <div className="user-resume">
                <h1 className="resume-page-title">resume</h1>
                    <h3 className="user-resume__title">Work Experience</h3>
                <div className="user-resume__work-experience">

                    {
                        resumeData.work.map(((item, index) => (
                            <ResumeItem title={item.title} dateIn={item.date_in} dateTo={item.date_to} job={item.job_title} disc={item.disc} key={index +1}/>
                        )))
                    }
                </div>


                    <h3 className="user-resume__title">Education</h3>
                <div className="user-resume__education">
                    {
                        resumeData.education.map((item, index) => (
                            <ResumeItem title={item.title} job={item.job_title} dateIn={item.date_in} dateTo={item.date_to} disc={item.disc} key={index +1}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
