import React from 'react'
import PermIdentity from '@material-ui/icons/PermIdentity';
import AirplayIcon from '@material-ui/icons/Airplay';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Link} from 'react-router-dom';

export default function NavBar() {

    return (

        <div className="navbar">
            <ul className="navbar__items">
                <li className="navbar__item"><Link to="/"><PermIdentity /></Link></li>
                <li className="navbar__item"><Link to="/project"><AirplayIcon /></Link></li>
                <li className="navbar__item"><Link to="/resume"><LibraryBooks /></Link></li>
                <li className="navbar__item"><Link to="/awards"><CheckCircleIcon /></Link></li>
                <li className="navbar__item"><Link to="/comment"><ChatBubbleOutlineIcon /></Link></li>
            </ul>
        </div>

        
    )
}
