import React from "react";
import work1 from "../images/work1.png"

export default function Works() {
    return (
        <div className="works">
            <div className="worksheadingwrap">
                <h3 className="worksheading">Works</h3>
            </div>
            <div className="worksdesc" >
                <div className="workimage">
                    <img src={work1} className="workimageimg" />
                </div>
                <div className="worksdescdisc">
                    <div className="workheading">
                        <h1 className="workheadingtext">TO DO APP</h1>
                    </div>
                    <div className="workdesc">
                        <p>An app made for saving To do lists</p>
                    </div>
                    <div className="workstatus">
                        STILL IN WORK
                    </div>
                    <div className="linktowork">
                        <a href="https://ajaykrshna.github.io/React-app/"  target="_blank" className="linktoworka">VIEW WORK</a>
                    </div>
                </div>
            </div>
        </div>
    )
}