import React from "react";

const Hero = (props) => {
    return (
        <div className="Hero">
            <div className="text-secondary px-4 py-5 text-center" id="Home">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Braden Chapman</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-3 mb-5 text-white-50">I am a Colorado based Front-End Engineer who specializes in React.js</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <div className="col col-lg-3">
                                <a className="btn btn-outline-light bg-opacity-25 btn-lg" role="button" href="mailto:bradencchapman@yahoo.com">Contact Me</a>
                            </div>
                            <div className="col col-lg-3">
                                <a className="btn btn-outline-info bg-opacity-25 btn-lg" download="Braden Chapman Resume" role="button" href="Braden_Chapman_Resume.pdf">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
