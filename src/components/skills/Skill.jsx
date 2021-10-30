import "./skill.css";

const Skill = () => {
    return (
       <div className='my-skills'>
            <div className="sk-left">
                <div className="sk-container">
                    <div className="sk-title">Programming skills</div>
                    <ul>
                        <li className="html">HTML</li>
                        <li className="css">CSS</li>
                        <li className="boot">Bootstrap</li>
                        <li className="java">Javascript</li>
                        <li className="react">React</li>
                        <li className="node">Node</li>
                    </ul>
                </div>
            </div>
            <div className="sk-right">
                    
                    <div className="sk-title">Professional skills</div>
                        <div className="pfs-sk-container">
                            <div className="sk1">Communication</div>
                            <div className="sk2">Team work</div>
                            <div className="sk3">Project management</div>
                            <div className="sk4">Creativity</div>
                        </div>
            </div>
       </div>
    )
}

export default Skill
