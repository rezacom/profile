import React from 'react'

export default function ResumeItem(props) {
    console.log(props)
    return (
        <div className="resume-item">

    <h3 className="resume-item__title">{props.title}</h3>
    <h5 className="resume-item__role">{props.job}</h5>
    <span className="resume-item__date">{props.dateIn} - {props.dateTo}</span>
            <p className="resume-item__disc">
                {props.disc}
            </p>

        </div>
    )
}
