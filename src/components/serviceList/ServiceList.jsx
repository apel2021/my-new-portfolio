import "./serviceList.css";
import "../services/Service";
import Service from "../services/Service";
import { service } from "../../data";

const ServiceList = () => {
    return (
        <div className="sl">
            <div className="sl-texts">
                <h1 className="sl-title">My services</h1>
                <div className="line">What I provide</div>
                <p className="sl-desc">
                    I'm given here some of my service items list. I work for web development, web services, IT support. I attached here from my past experience where I worked on. 
                </p>
            </div>
            <div className="sl-list">
                {service.map((item) =>(
                    <Service key={item.id} img={item.img} link={item.link}/>

                ))}
                
                
            </div>
        </div>
    )
}

export default ServiceList
