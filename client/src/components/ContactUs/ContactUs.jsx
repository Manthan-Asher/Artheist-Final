import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
    return ( 
        <div className="contactUsContainer">
            <div className="contactUsCard">
                <h2>Reach Us At</h2>
                <div className="artheistContactDetails">
                    <div className="artheistInstagram">
                        <div>
                            <a href="https://www.instagram.com/artheist.in/"
                               className="contactLink"
                               target="_blank"
                               >
                                <i class="fab fa-instagram"></i>
                            </a>
                            <p>Instagram - @artheist.in</p>
                        </div> 
                    </div>
                    <hr />
                    <div className="artheistEmail">
                        <div>                    
                            <a href="mailto:artheistindia@gmail.com" 
                            target="_blank"
                            className="contactLink">
                                <i class="fas fa-envelope"></i>
                            </a>
                            <p>artheistindia@gmail.com</p> 
                        </div>
                    </div>
                    <hr />
                    <div className="artheistContactNo">
                        <div>
                            <a href="tel:+91-1234567890" 
                            target="_blank"
                            className="contactLink">
                                <i class="fas fa-phone-alt"></i>
                            </a>
                            <p>+91-1234567890</p>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;