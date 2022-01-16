import React from "react";
import vectorDesign2 from '../images/Vector_2.png';

export default function DoctorProfile() {
    return (
        <div>
        <header className="header">
            <img className="login--vector" src={vectorDesign2}/>
            <div class="centered-left">
                <h2>Louis Applebees</h2>
                <h4>Doctor</h4>
            </div>
        </header>
        <main>
            <p>Patient Messages</p>
            <ul>
                <li>Skin Patch</li>
                <li>Depression</li>
            </ul>
        </main>
        
        </div>

    )
}