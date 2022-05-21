import React from "react";
import Header from "./Header";
const AboutMe = (props) => {
    return (
        <div className="about-me-container" id="About">
            <div className="container-md">
                <Header label="About Me" />
                <p className="Lead">
                    <strong> Hello, i am a 27 year old Front-End developer based in central Colorado.</strong>
                    <span> I became interested in software/Web development at a very young age, My passion for technology and gaming has only grown over the years and lead me to pursue a career in tech.</span>
                </p>
            </div>
            <div className="img-container">
                <img src=".\websitephoto.jpg" className="img-fluid" alt="self portrait"></img>
            </div>
        </div>
    )
}

export default AboutMe;
