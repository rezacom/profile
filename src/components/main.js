import React from 'react'
import NavBar from './nav/navBar';
import UserInfo from './info/userInfo';
import UserProject from './project/userProject';
import UserResume from './resume/userResume';
import UserComments from './comments/userComments';
import UserAwards from './awards/userAwards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Main() {
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
                            <Route path="/" exact component={UserInfo}/>
                            <Route path="/project" component={UserProject} />
                            <Route path="/resume" component={UserResume}/>
                            <Route path="/comment" component={UserComments}/>
                            <Route path="/awards" component={UserAwards}/>
                        </div>
                    </div>

                </div>
            </div>
            </Router>
        </>
    )
}
