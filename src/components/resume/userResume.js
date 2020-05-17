import React from 'react'
import ResumeItem from './resumeItem';

export default function UserResume() {
    return (
        <>
        <div className="user-resume">
           <div className="user-resume__work-experience">
                <h2 className="user-resume__title">Work Experience</h2> 
                <ResumeItem />
                <ResumeItem />
           </div>


           <div className="user-resume__EDUCATION">
                <h2 className="user-resume__title">EDUCATION</h2> 
                <ResumeItem />
                <ResumeItem />
           </div>

        </div>
        </>
    )
}
