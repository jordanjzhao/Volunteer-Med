import React from "react";

export default function SignUpVerify() {
    return (
        <div>
        <nav>
            <h2>Verify</h2>
            <h4>A verification number was sent to your phone number</h4>
        </nav>
        <main>
            <form className="form">
                <div>
                    <input className="form--input" placeholder="Verification Number" type="text" />
                </div>
                <h4>Didn't get it? Resend</h4>
                <div>
                    <button className="form--completebutton">Complete</button>
                </div>
            </form>
        </main>
        </div>
    )
}