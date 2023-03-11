import React from "react";
import Button from "../components/Button";
import "../styles/screens/Landing.css";

const Landing = () => {
    return (
        <div className="container">
            <div className="header">
                <img src="./logo.svg"></img>
                <h3>Byte-sized learning for STEM</h3>
            </div>
            <Button text="Sign in"/>
            <Button text="Sign up"/>
            <a>Continue as guest</a>
        </div>
    );
};

export default Landing;