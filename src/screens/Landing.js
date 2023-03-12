import React from "react";
import Button from "../components/Button";
import Subheader from "../components/Subheader";
import Link from "../components/Link";
import "../styles/screens/Landing.css";

const Landing = () => {
    return (
        <div className="container">
            <div className="sub-container">
                <div className="header" style={{flexDirection: "column"}}>
                    <img src="./logo.svg"></img>
                    <Subheader style={{fontStyle: "italic", fontWeight: "regular"}}>Byte-sized learning for STEM</Subheader>
                </div>

                <div className="buttons">
                    <Button onClick={() => alert("Not implemented yet")}>Sign in</Button>
                    <Button secondary onClick={() => alert("Not implemented yet")}>Sign up</Button>
                    <Link href="/Home" style={{alignSelf: "center"}}>Continue as guest</Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;