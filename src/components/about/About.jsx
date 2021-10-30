import "./about.css";
import Me1 from "../../img/IMG_20181018_013341.jpg";

const About= () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me1} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Hi everyone. I am apel mahmud and a software engineer. </p>
                <p className="a-desc">
                    Currently I am working in a company as an IT support specialist. I graduated from Yunnan University as a software engineer. I build professional website for clients and also provide differents web services. I mainly work with javascript and its framework react.js and also node.js. I am trying to be a full-stack web developer now and working on that.
                </p>

                <button className="r-button">Resume</button>

            </div>
        </div>
    )
}

export default About
