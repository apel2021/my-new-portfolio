import "./service.css";

const Service = ({img, link}) => {
    return (
        <div className="s">
                <div className="s-browser">
                    <div className="s-circle"></div>
                    <div className="s-circle"></div>
                    <div className="s-circle"></div>
               </div>

               <a href={link} target="_blank" rel="noreferrer">

                    <img src={img} alt="" className="s-img" />
               </a>
        </div>
    )
}

export default Service
