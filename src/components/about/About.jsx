import "./about.css";
import Me1 from "../../img/IMG_20181018_013341.jpg";
import { useState } from "react";
// import Resume from "../../img/resume/apel-mahmud-resume.pdf";

const About= () => {
    const [resume] = useState("https://drive.google.com/file/d/1v1OIFqVdXie9_BFs0bwUtyEPdObI9BLE/view?usp=sharing");
    return (
        <div className="a" id="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me1} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Hi everyone. I am <b>Apel Mahmud</b> and a software engineer. </p>
                <p className="a-desc">
                    Currently I am working in a company as an IT support specialist.
                    I graduated from Yunnan University as a software engineer. 
                    I build professional website for clients and also provide differents web services.
                    I mainly work for frontend web development. Recently I started to work with backend as well. 
                    I love technology and passionate to create something special. 
                </p>

                <a href={resume} className="resume-button" download target="_blank" rel="noreferrer">Resume</a>

            </div>
        </div>
    )
}

export default About
