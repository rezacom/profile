import React from 'react'
import awardIcon from '../../images/sports-and-competition.svg';

export default function AwardItem(props) {
    return (
        <>
              <div className="user-awards__item">
                <div className="row">
                    <div className="col-2">
                        <img className="awards__item-img" src={awardIcon}/>
                    </div>
                    <div className="col-10">
                        <div className="awards__item-disc">
                            <h3 className="awards__item-disc__title">{props.title}</h3>
                            <p className="awards__item-disc__text">
                                {props.disc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
