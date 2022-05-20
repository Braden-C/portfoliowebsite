import React from "react";

const Header = (props) => {
    return (
        <div className="Header">
            <div className="horizontal-Header">
                <span>{props.label}</span>
                <div className="horizontal-rule">
                </div>
            </div>
        </div>
    );
};

export default Header;