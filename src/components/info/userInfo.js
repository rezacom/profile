import React from 'react'
import avatar from '../../images/avatar.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkIcon from '@material-ui/icons/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FaFacebook } from 'react-icons/fa';

export default function UserInfo() {
    return (
        <>
            <div className="user-info">
                <div className="row">
                    <div className="col-4">
                        <div className="user-info__avatar" style={{ backgroundImage: `url(${avatar})` }}>

                            {/* <img src={avatar}/> */}
                        </div>
                    </div>

                    <div className="col-8">
                        <h2 className="user-info__name">Reza Shojaei</h2>
                        <h3 className="user-info__job">Front End Developer</h3>
                        <div className="user-info__contact">
                            <span><MailOutlineIcon /> rezashojaei1880@gmail.com</span>
                            <span><PhoneIcon /> 09212430949</span>
                            <span><LinkIcon /> rezawd.ir</span>
                            <span><RoomIcon /> 6 Place Saint-Germain des Prés, 75006 Paris, France</span>
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
                        <p>TemPlaza, the website built and improved by Sunland., Jsc. We supply templates and other qualified applications on Joomla and WordPress. Our head quarter is located in Hanoi, the  capital of Vietnam and which was recently voted as one of the most peaceful destinations of Asia for residence and business as well.

Our mission is to supply templates and applications. The company is formed of most skilled staff, with a variety of experience in information technology and communication section in general, and working with Joomla and WordPress in particular. With the strong desire to bring improvement to customer business, we are thriving to supply the best products, services, and support to our customers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
