import React from "react";

export default function SignUpP() {
    return (
        <div>
        <nav>
            <h2>Hello!</h2>
            <h4>Please enter your...</h4>
        </nav>
        <main>
            <form className="form">
                <div>
                    <h1>Phone number*</h1>
                    <input className="form--input" placeholder="Phone number" type="text" />
                </div>
                
                <div>
                    <h1>Full name*</h1>
                    <input className="form--input" placeholder="Full name" type="text" />
                </div>
                
                <div>
                    <h1>Date of Birth*</h1>
                    <input className="form--input" placeholder="DD/MM/YYYY" type="text" />
                </div>
                
                <div>
                    <h1>Weight</h1>
                    <input className="form--input" placeholder="kg" type="text" />
                </div>

                <div>
                    <h1>Height</h1>
                    <input className="form--input" placeholder="cm" type="text" />
                </div>
                <div>
                    <button className="form--button">></button>
                </div>
            </form>
        </main>
        </div>
    )
}