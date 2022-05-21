import React from "react";
import Header from "./Header";


const Projects = () => {
    return (
        <div className="row justify-content-center" id="Projects">
            <div className="header-container">
                <Header label="Projects" />
            </div>
            <div className="cards justify-content-evenly">
                <div className="col-lg-3" id="main-card">
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1*smuMxL6qzvl-OUxTfuxHUg.jpeg&f=1&nofb=1" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Translation App</h5>
                            <p className="card-text">Translation app using Google Translate API. developed entirely in React.js</p>
                            <a href="https://github.com/Braden-C/Translation-App" rel="noreferrer" target="_blank" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div >
                <div className="col-lg-3" id="main-card">
                    <div className="card">
                        <img src=".\project2Logo.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Score Keeper</h5>
                            <p className="card-text">Score Keeper app for tabletop games. Developed entirely in vanilla JavaScript.</p>
                            <a href="https://github.com/Braden-C/ScoreKeeper" rel="noreferrer" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div >
            </div>
        </div>

    )
};
export default Projects;