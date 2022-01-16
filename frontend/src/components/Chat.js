import React from "react";
import camIcon from "../images/cam_1.png";

export default function Chat() {
    return (
        <div>
            <nav className="chat--nav">
                <h2>Patient Name</h2>
                <img src={camIcon} className="chat--icon"/>
            </nav>
            <div className="chat--field">

            </div>
            <main>
                <form>
                    <input className="chat--input" placeholder="Type something..." type="text" />
                    <button className="chat--button">Send</button>
                </form>
            </main>
        </div>
    )
}