import { validateForm } from "../../assets/js";

export default function ContactDetail() {
    return (
        <div>
            <div className="content">
                <h2>Contact Us</h2>
                <p>We will get back to you within 24 hours!</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="bi bi-house-fill"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>590 Cach Mang Thang Tam,<br /> Ward 11, District 3,<br /> Ho Chi Minh City</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="bi bi-envelope-fill"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>Group2@fpt.edu.vn</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="bi bi-telephone-fill"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>1800 1779</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contactForm">
                    <form action="index.html" name="contactForm" onSubmit={(e) => {
                        e.preventDefault();
                        return validateForm(); // Assuming validateForm() is a global function
                    }}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" id="fname" required />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" id="email" required />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required id="msg"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
                {/* Contact Form end */}
            </div>

            {/* Google Maps */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3193500366883!2d106.66408561394566!3d10.786834792314448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xd2ecb62e0d050fe9!2sFPT-Aptech%20Computer%20Education%20HCM!5e0!3m2!1sen!2s!4v1637025595026!5m2!1sen!2s" 
                width="1200" 
                height="450" 
                allowFullScreen 
                title="Google Maps"
            ></iframe>
            {/* Google Maps end */}
        </div>
    );
}
