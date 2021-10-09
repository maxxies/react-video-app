import React from "react";

function MessageForm() {
    return (
        <form className="form">
            <h3>Message Us</h3>
            <div className="control">
                <label htmlFor="name">Name</label>
                <input type="text" name="userName" id="name" />
            </div>
            <div className="control">
                <label htmlFor="email">Email</label>
                <input type="email" name="userEmail" id="email" />
            </div>
            <div className="control">
                <label htmlFor="info">Description</label>
                <textarea id="info" rows="5" />
            </div>
            <div className="action">
                <button>Send</button>
            </div>
        </form>
    );
}
export default MessageForm;
