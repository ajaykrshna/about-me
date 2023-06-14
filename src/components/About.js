import React from "react";
import Mod from "./Mod";

export default function About() {
    return (
        <div className="about">
            <div className="heading--main">
                <h1 className="heading--main--text"><span className="grey">I'm</span> Ajay Krishnan</h1>
                <h2 className="heading--sub--text"><span>Passionate Web Developer</span></h2>
            </div>
            <div className="threejs">
            <Mod/>
            </div>
        </div>
    )
}