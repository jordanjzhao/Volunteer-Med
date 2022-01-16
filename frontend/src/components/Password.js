import React from "react";

export default function Password() {
    return (
        <div>
        <nav>
            <h2>Password</h2>
            <h4>Please create a password</h4>
        </nav>
        <main>
            <form className="form">
                <div>
                    <h1>Password</h1>
                    <input className="form--input" placeholder="Password" type="text" />
                </div>
                <div>
                    <h1>Confirm Password</h1>
                    <input className="form--input" placeholder="Confirm password" type="text" />
                </div>
                <div>
                    <button className="form--completebutton">Complete</button>
                </div>
            </form>
        </main>
        </div>
    )
}