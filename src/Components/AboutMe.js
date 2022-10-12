import React from "react";
import Header from "./Header";
const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.JS",
    "Git",
    "Npm",
];



const AboutMe = (props) => {
    const renderTechList = () => {
        return technologies.map((item, index) => {
            return <li className="technology-item" key={index}>
                <i className="fas fa-terminal"></i>
                <span>{item}</span>
            </li>
        });
    };

    return (
        <div className="about-me-container" id="About">
            <div className="container-md">
                <Header label="About Me" />
                <p className="Lead">
                    <strong> Hello, I am a 27 year old Front-End developer based in central Colorado.</strong>
                    <span> I became interested in software/Web development at a very young age, My passion for technology and gaming has only grown over the years and lead me to pursue a career in tech.</span>
                </p>
                <span className="sub-header">Technologies: </span>
                <ul className="technology-list">
                    {renderTechList()}
                </ul>
            </div>
            <div className="img-container">
                <img src=".\websitephoto.jpg" className="img-fluid" alt="self portrait"></img>
            </div>
        </div>
    )
}

export default AboutMe;
