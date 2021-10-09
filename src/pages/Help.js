import React from "react";
import "./Help.css";
import Footer from "../Components/Footer";
import MessageForm from "../Components/MessageForm";

function Help() {
    return (
        <main className="home-body">
            <div className="help-title">
                <h2>Having troubles...</h2>
            </div>

            <MessageForm />
            <Footer />
        </main>
    );
}
export default Help;
