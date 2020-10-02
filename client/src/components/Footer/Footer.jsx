import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerNavLinks">
                <a href="/contest">Contest</a>
                <a href="/createContest">Create Contest</a>
                <a href="/aboutUs">About Us</a>
                <a href="/contactUs">Contact Us</a>
            </div>
            <div className="copyRightAndSocialLinks">
                <p>Copyright &copy; 2020 Artheist.in. All rights reserved.</p>
                <p>Made with ❤️ by  <a href="https://artheist.in/">Artheist.</a></p>
                <div className="footerSocialIcons">
                    <a href="https://www.instagram.com/artheist.in/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:artheistindia@gmail.com" target="_blank">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="tel:+91-1234567890" target="_blank">
                        <i class="fas fa-phone-alt"></i>
                    </a>
                </div>
            </div>
            
        </div>
      );
}
 
export default Footer;