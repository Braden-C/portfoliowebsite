import React from "react";
import Header from "./Header";

const ContactMe = () => {
    return (
        <div className="contact-me-container" id="Contact">
            <div className="container-md">
                <Header label="Contact Me" />
                <p className="contact">I'm currently open to opportunities, please feel free to reach out via email or LinkedIn. If you have any questions, please don't hesitate to ask!</p>
                <a className="btn btn-outline-light bg-opacity-25 btn-lg px-6" id="Contact-Button" role="button" href="mailto:bradencchapman@yahoo.com">Contact Me</a>
            </div>
            <div className="information-container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="mailto:bradencchapman@yahoo.com" className="icon-link">
                            <i className="far fa-envelope"></i>
                        </a>
                        <span>bradencchapman@yahoo.com</span>
                    </li>
                    <li className="list-group-item">
                        <a href="https://www.linkedin.com/in/braden-chapman-b25a05234?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Bvm36WcETd%2BVvXYIdiZdwQ%3D%3D" target="_blank" rel="noreferrer" className="icon-link">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <span>/braden-chapman-b25a05234</span>
                    </li>
                    <li className="list-group-item">
                        <a href="https://github.com/Braden-C" className="icon-link" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <span>/Braden-C</span>

                    </li>
                </ul>
            </div>
        </div>

    )
}

export default ContactMe;