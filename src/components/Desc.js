import React from "react";
import profile from "../images/medp.jpg"

export default function Desc() {
    return (
        <div className="desc">
            <div className="maintextwrap">
                <h2 className="maintext">Who am I?</h2>
            </div>
            <div className="text">
                <div className="info">
                    <div className="sections1">
                        <h3 className="subheadings">As a Student</h3>
                        <p className="desctext"><span className="grey">I'm</span> Ajay Krishnan</p>
                        <p className="desctext"><span className="grey">doing</span> BTech in Electrical Engineering</p>
                        <p className="desctext"><span className="grey">at</span> IIT Hyderabad</p>
                    </div>
                    <div className="sections">
                        <h3 className="subheadings">What are my hobbies</h3>
                        <p className="desctext"><span className="grey">I</span> Love Coding</p>
                        <p className="desctext">Time flies past when I work on a project</p>
                    </div>
                    <div className="sections">
                        <h3 className="subheadings">As a Dev</h3>
                        <p className="desctext"><span className="grey">I'm </span>intermediately skilled on Frontend Development</p>
                        <p className="desctext"><span className="grey">Specialised in </span>ReactJS</p>
                    </div>
                </div>
                <div className="imageimg">
                    <img src={profile} className="profile" />
                </div>
            </div>
        </div>
    )
}