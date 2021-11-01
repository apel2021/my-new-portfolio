import "./skill.css";

const Skill = () => {
    return (
       <div className='my-skills' id="skills">
            <div className="sk-left">
                <div className="sk-container">
                    <div className="sk-title-1">Programming skills</div>
                    <div className="s-line"></div>
                    <ul>
                        <li className="html">HTML ?90%</li>
                        <li className="css">CSS ?70%</li>
                        <li className="boot">Bootstrap ?80%</li>
                        <li className="java">Javascript ?70%</li>
                        <li className="react">React ?80%</li>
                        <li className="node">Node ?50%</li>
                    </ul>
                </div>
            </div>
            <div className="sk-right">
                    
                    <div className="sk-title-2">Professional skills</div>
                    <div className="s-line-2"></div>
                        <div className="pfs-sk-container">
                            <div className="sk1">Communication <h1>95%</h1></div>
                            <div className="sk2">Team work <h1>80%</h1></div>
                            <div className="sk3">Project management <h1>70%</h1></div>
                            <div className="sk4">Creativity <h1>85%</h1></div>
                        </div>
            </div>
       </div>
    )
}

export default Skill
