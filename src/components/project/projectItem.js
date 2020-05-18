import React from 'react'

export default function ProjectItem(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="project-item">
                <div className="project-item__box">

                    <img src={props.img} />
                    <div className="project-item__detail">
                        <h3 className="project-item__detail-title">{props.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
