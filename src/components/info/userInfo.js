import React from 'react'
import avatar from '../../images/avatar.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkIcon from '@material-ui/icons/Link';
import { FaFacebook } from 'react-icons/fa';
import userPro from '../../images/userpro.png';

export default function UserInfo(props) {
    // console.log(props);
    const infoData = props.data;

    return (
        <>
            <div className="user-info">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="user-info__avatar" style={{ backgroundImage: `url(${avatar})` }}>

                            {/* <img src={avatar}/> */}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <h2 className="user-info__name">{infoData.name}</h2>
                        <h3 className="user-info__job">{infoData.job}</h3>
                        <div className="user-info__contact">
                            <span><MailOutlineIcon /> {infoData.email}</span>
                            <span><PhoneIcon /> {infoData.phone}</span>
                            <span><LinkIcon /> {infoData.url}</span>
                            <span><RoomIcon />{infoData.location}</span>
                        </div>
                        <div className="user-info__socials">
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><FaFacebook /></a>
                        </div>
                    </div>
                    <div className="col-12">
                        <h3>About Me</h3>
    <p>{infoData.about}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
