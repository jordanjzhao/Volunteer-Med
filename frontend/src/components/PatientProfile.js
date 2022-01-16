import React from "react";
import vectorDesign2 from '../images/Vector_2.png';

export default function PatientProfile() {
    return (
        <div>
        <header className="header">
            <img className="login--vector" src={vectorDesign2}/>
            <div class="centered-left">
                <h2>John Smith</h2>
                <h4>Patient</h4>
            </div>
        </header>
        <main>
            <p>Cases Messages</p>
            <ul>
                <li>Skin Patch</li>
                <li>Bump on knee</li>
            </ul>
        </main>
        
        </div>

    )
}