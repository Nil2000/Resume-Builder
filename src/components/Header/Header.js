import React from "react";
import resillustrat from "../../res/undraw_resume_re_hkth.svg";
import "./header.css";

export default function Header() {
    return (
        <div className="header-container">
            <div className="left">
                <p className="heading">Build your own</p>
                <p className="heading">
                    <span>Resume</span> here!!!
                </p>
            </div>
            <div className="right">
                <img className="img" src={resillustrat} alt=""  />
            </div>
        </div>
    );
}
