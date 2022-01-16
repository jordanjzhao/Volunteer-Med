import React from "react";
import vectorDesign from '../images/Vector_1.png';

export default function SignUp() {
    return (
        <div>
        <header className="header">
            <img className="login--vector" src={vectorDesign}/>
            <div class="centered-left">Sign Up</div>
        </header>
        <main>
            <form className="form">
                <div>
                    <h1>Are you a...</h1>
                    <input className="form--input" placeholder="Select position" type="text" />
                </div>
                <div>
                    <button className="form--button">></button>
                </div>
            </form>
        </main>
        </div>
    )
}