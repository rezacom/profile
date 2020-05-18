import React from 'react'
import AwardItem from './awardItem';

export default function UserAwards(props) {

    console.log(props)

    const awardData = props.data;

    return (
        <div className="user-awards">
            <h1 className="user-awards__title resume-page-title">awards</h1>

            {
                awardData ? awardData.map((item, index) => (
                    <AwardItem title={item.title} disc={item.disc} key={index + 1} />
                )) : ""
            }

        </div>
    )
}