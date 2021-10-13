import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import FormErrorModal from "./FormErrorModal";

function MessageForm() {
    const enteredName = useRef();
    const enteredEmail = useRef();
    const enteredDescription = useRef();

    const [errorMessage, errorMessageHandler] = useState([]);
    const [modalChange, modalChangehandler] = useState(false);
    //Handles close of modal

    function closeModal() {
        modalChangehandler(false);
    }
    const history = useHistory();

    function handleSubmitMessage(event) {
        var name = enteredName.current.value;
        var email = enteredEmail.current.value;
        var description = enteredDescription.current.value;

        //checks values whether they are empty
        if (name !== "" && email !== "" && description !== "") {
            const messageData = {
                name: name,
                email: email,
                description: description,
            };
            //Sends message to database when condition is satisfied
            fetch(
                "./messages.json", //https://video-app-d61c2-default-rtdb.firebaseio.com/messages.json
                {
                    method: "POST",
                    body: JSON.stringify(messageData),
                    headers: {
                        "Content-type": "application/json",
                    },
                },
            )
                .then(() => {
                    history.replace("/help"); //Routes the page back again
                })
                .catch((error) => {
                    alert("Something went wrong. ", error.message);
                });
        } else {
            //Sends error message to user
            modalChangehandler(true);
            errorMessageHandler([]);
            errorMessageHandler((oldaArray) => [
                ...oldaArray,
                "All fields are required",
            ]);
        }
    }

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            {modalChange && (
                <FormErrorModal
                    messages={errorMessage}
                    handleClose={closeModal}
                    modalStatus={modalChange}
                />
            )}
            <h3>Message Us</h3>
            <div className="control">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="userName"
                    id="name"
                    ref={enteredName}
                    required
                />
            </div>
            <div className="control">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="userEmail"
                    id="email"
                    ref={enteredEmail}
                    required
                />
            </div>
            <div className="control">
                <label htmlFor="info">Description</label>
                <textarea
                    id="info"
                    rows="5"
                    ref={enteredDescription}
                    required
                />
            </div>
            <div className="action">
                <button onClick={() => handleSubmitMessage()} type="reset">
                    Send
                </button>
            </div>
        </form>
    );
}
export default MessageForm;
