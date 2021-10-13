import React from "react";
import "./Settings.css";

function Settings() {
    return (
        <main className="home-body">
            <div className="settings-title">
                <h2>Settings</h2>
            </div>
            <div className="settings-items">
                <h3>Account</h3>
                <ul>
                    <li>Personal</li>
                    <li>Remove account</li>
                </ul>
                <br></br>
                <br></br>
                <h3>Options</h3>
                <ul>
                    <li>Theme</li>
                    <li>Interface</li>
                    <li>Subtitles</li>
                    <li>Video</li>
                    <li>Audio</li>
                    <li>Advanced</li>
                </ul>
                <br></br>
                <br></br>
                <h3>About</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>License</li>
                </ul>
            </div>
        </main>
    );
}
export default Settings;
