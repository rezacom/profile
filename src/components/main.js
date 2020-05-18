import React, {useEffect, useState} from 'react'
import NavBar from './nav/navBar';
import UserInfo from './info/userInfo';
import UserProject from './project/userProject';
import UserResume from './resume/userResume';
import UserComments from './comments/userComments';
import UserAwards from './awards/userAwards';
import data from '../data.json';

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

export default function Main() {

    const [loading, setLoading] = useState(false)
    const userData = data;
    // console.log(userData);

    // useEffect(() => {
    //     fetch('../data.json')
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // });

    return (
        <>
        <Router>
            <div className="container">
                <div className="profile">

                    <div className="row">
                        <div className="col-1" style={{padding: 0, paddingLeft: 15}}>
                            <NavBar />
                        </div>
                        <div className="col-11" style={{paddingTop: 20, paddingRight: 30}}>
                            <Route path="/" exact >
                                <UserInfo data={userData.info} socials={userData.socilas} loading={loading}/>
                            </Route>
                            <Route path="/project" >
                                <UserProject data={userData.projects} loading={loading}/>
                            </Route>
                            <Route path="/resume"  >
                                <UserResume data={userData.resume} loading={loading}/>
                            </Route>
                            <Route path="/comment">
                                <UserComments />
                            </Route>
                            <Route path="/awards">
                                <UserAwards data={userData.awards} loading={loading}/>
                            </Route>
                        </div>
                    </div>

                </div>
            </div>
            </Router>
        </>
    )
}
