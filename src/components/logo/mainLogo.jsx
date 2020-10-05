import React from "react";
import "./logo.css";

export const Logo = () => {
    return (
        <div className="logo-main">
            <img id="logo-img" src={require('./smarte.png')} />
            <img id="updown-arrow" src={require('./sort.png')} ></img>
            <span className="manage">Manage</span>
        </div >

    );
}

export default Logo;