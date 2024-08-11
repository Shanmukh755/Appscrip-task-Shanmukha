import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import './index.css'

const Footer = () => {
    return(
        <>
        <div className='footer-container' id="contactUs">
            <div className='footer-contact-container'>
                <div className='footer-subscribe-container'>
                    <h2 className='subscribe-text1'>BE THE FIRST TO KNOW</h2>
                    <p className='subscribe-text2'>Sign up for updates from metta muse</p>
                    <input type='text' placeholder='Enter Your Email...' className='subscibe-box' />
                    <button className='subscribe-btn'>SUBSCRIBE</button>
                </div>
                <div className='footer-contact-data'>
                    <h2 className='contact-text1'>CONTACT US</h2>
                    <p className='contact-text2'>+44 221 133 5360</p>
                    <p className='contact-text2'>customercare@mettamuse.com</p>
                    <h2 className='contact-text1'>CURRENCY</h2>
                    <div className='flag-cont'>
                        <img src='https://cdn0.iconfinder.com/data/icons/world-flags-1/100/USA_-4-512.png' className='flag-img' alt='USA Flag' />
                        <h2 className='contact-text1'>+ USD</h2>
                    </div>
                    <p className='contact-text2'>Transactions will be completed in Euros and a currency reference is available on hover</p>
                </div>
            </div>
            <hr />
            <div className='footer-followus-container'>
                <div className='footer-metta-container'>
                    <h2 className='follow-text1'>metta muse</h2>
                    <ul className='u-list'>
                        <li className='follow-text2'>About Us</li>
                        <li className='follow-text2'>Stories</li>
                        <li className='follow-text2'>Artisans</li>
                        <li className='follow-text2'>Boutiques</li>
                        <li className='follow-text2'>Contact Us</li>
                        <li className='follow-text2'>EU Compliances Docs</li>
                    </ul>
                </div>
                <div className='footer-links-container'>
                    <h2 className='follow-text1'>QUICK LINKS</h2>
                    <ul className='u-list'>
                        <li className='follow-text2'>Orders & Shipping</li>
                        <li className='follow-text2'>Join/Login as a seller</li>
                        <li className='follow-text2'>Payment & Pricing</li>
                        <li className='follow-text2'>Return & Refunds</li>
                        <li className='follow-text2'>FAQS</li>
                        <li className='follow-text2'>Privacy Policy</li>
                        <li className='follow-text2'>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-follow-data'>
                    <div className='social-icons-container'>
                        <h2 className='follow-text1'>FOLLOW US</h2>
                        <div>
                            <FaInstagram className="social-icon" />
                            <FaLinkedin className="social-icon" />
                            <FaFacebookSquare className="social-icon" />
                        </div>
                    </div>
                    <div className="cards-container">
                        <h2 className="follow-text1">metta muse ACCEPTS</h2>
                        <div className="payment-cards">
                            <div className="card">
                                <img src="https://static.vecteezy.com/system/resources/previews/017/221/782/non_2x/google-pay-logo-transparent-free-png.png" className="payment-card-img" alt="G pay" />
                            </div>
                            <div className="card">
                                <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" className="payment-card-img1" alt="G pay" />
                            </div>
                            <div className="card">
                                <img src="https://freepngimg.com/thumb/paypal/2-2-paypal-logo-transparent-png.png" className="payment-card-img" alt="G pay" />
                            </div>
                            <div className="card">
                                <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Amex-512.png" className="payment-card-img" alt="G pay" />
                            </div>
                            <div className="card">
                                <img src="https://logosmarcas.net/wp-content/uploads/2022/03/Apple-Pay-Logo.png" className="payment-card-img1" alt="G pay" />
                            </div>
                            <div className="card">
                                <img src="https://www.qpayworld.com/wp-content/uploads/2022/01/Q-Pay-Logo_Dark.png" className="payment-card-img2" alt="G pay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="metta-mouse-sm">
                <h2 className="follow-text1">metta mouse</h2>
                <select className="metta-select">
                    <option></option>
                    <option className="follow-text2">About Us</option>
                    <option className="follow-text2">Stories</option>
                    <option className="follow-text2">Artisans</option>
                    <option className="follow-text2">Boutiques</option>
                    <option className="follow-text2">Contact Us</option>
                    <option className="follow-text2">Eu Compliances Docs</option>
                </select>
            </div>
            <div className="quick-links-sm">
                <h2 className="follow-text1">QUICK LINKS</h2>
                <select className="metta-select">
                    <option></option>
                    <option className='follow-text2'>Orders & Shipping</option>
                    <option className='follow-text2'>Join/Login as a seller</option>
                    <option className='follow-text2'>Payment & Pricing</option>
                    <option className='follow-text2'>Return & Refunds</option>
                    <option className='follow-text2'>FAQS</option>
                    <option className='follow-text2'>Privacy Policy</option>
                    <option className='follow-text2'>Terms & Conditions</option>    
                </select>
            </div>
            <div className="follow-us-sm">
                <h2 className="follow-text1">FOLLOW US</h2>
                <select className="metta-select">
                    <option></option>
                    <option className="follow-text2">Instagram</option>
                    <option className="follow-text2">Linkedin</option>
                    <option className="follow-text2">Facebook</option>
                </select>
            </div>
            <div className="card-container-sm">
                <h2 className="follow-text1">metta muse ACCEPTS</h2>
                <div className="payment-cards">
                    <div className="card">
                        <img src="https://static.vecteezy.com/system/resources/previews/017/221/782/non_2x/google-pay-logo-transparent-free-png.png" className="payment-card-img" alt="G pay" />
                    </div>
                    <div className="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" className="payment-card-img1" alt="G pay" />
                    </div>
                    <div className="card">
                        <img src="https://freepngimg.com/thumb/paypal/2-2-paypal-logo-transparent-png.png" className="payment-card-img" alt="G pay" />
                    </div>
                    <div className="card">
                        <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Amex-512.png" className="payment-card-img" alt="G pay" />
                    </div>
                    <div className="card">
                        <img src="https://logosmarcas.net/wp-content/uploads/2022/03/Apple-Pay-Logo.png" className="payment-card-img1" alt="G pay" />
                    </div>
                    <div className="card">
                        <img src="https://www.qpayworld.com/wp-content/uploads/2022/01/Q-Pay-Logo_Dark.png" className="payment-card-img2" alt="G pay" />
                    </div>
                </div>        
            </div>
        </div>
        <div className="footer-copy">
            <p className="follow-text2">Copyright @ 2024 mettamuse, All rights reserved</p>
        </div>
        </>
    )
}

export default Footer