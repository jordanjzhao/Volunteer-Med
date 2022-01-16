import React from "react";
import vectorDesign from '../images/Vector_1.png';

export default function Login() {
    return (
        <div>
        <header className="header">
            <img className="login--vector" src={vectorDesign}/>
            <div class="centered-left">Login</div>
        </header>
        <main>
            <form className="form">
                <div>
                    <h1>Phone Number</h1>
                    <input className="form--input" placeholder="Phone number" type="text" />
                </div>
                <div> 
                    <h1>Verification Number</h1>
                    <input className="form--input" placeholder="Verification" type="text" />
                </div>
            </form>
        </main>
        <div>
                    <button className="form--loginButton">></button>
        </div>
        </div>
    )
}