import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi at mollitia asperiores. Porro totam repellat labore itaque accusantium quidem!</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+92317-4268086</li>
                            <li>mudassaryounas362@gmail.com</li>
                        </ul>
                    </div>

                </div>
                <hr />
                <p className="footer-copyright">
                    Copyright © 2023 All rights reserved | This template is made with</p>
            </div>
        </>
    )
}
export default Footer;