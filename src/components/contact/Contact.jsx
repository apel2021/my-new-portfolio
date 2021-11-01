import "./contact.css";
import Phone from '../../img/phone.png';
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
    faFacebook,
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        emailjs
        
        .sendForm('service_nsepjb2', 
        
        'template_6ftz9ru', 
        
        formRef.current, 
        
        'user_JWHxtM119xqANbn1zPDpM')
      
        .then(
            (result) => {
               console.log(result.text);
               setDone(true);
      }, 
      (error) => {
          console.log(error.text);
      }

      );

    }
    return (
        <div id="contact">
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon" />
                                <p>+8801303451038</p>
                            </div>
                           
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon" />
                                <p>apelmahmud1151@gmail.com</p>
                            </div>

                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon" />
                                <p>220 maltinogor street, Bogura, Bangladesh</p>
                            </div>
                            <h4 className="s-title">Here is my social link. You can visit and see about myself</h4><br />
                            <div className="s-link">
                                
                                <a href="https://www.facebook.com/apel.mahmud.1971/"
                                   target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon className="facebook" icon={faFacebook} size="2x" />
                                </a>

                                <a href="https://www.instagram.com/apel1151/"
                                    target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon className="instagram" icon={faInstagram} size="2x" />
                                </a>


                                <a href="https://www.linkedin.com/in/apel-mahmud1151/"
                                    target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="2x" />
                                </a>


                            </div>


                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>What's your project?</b> Get it touch. Always available for work if the right project comes along to me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea rows="5" placeholder="Meassage" name="message"></textarea>
                            <button>Submit</button><br />
                            {done && "Thank your for your email..."}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
