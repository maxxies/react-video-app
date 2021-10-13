import React from "react";
import "../index.css";

function FormErrorModal(props) {
    //maps messages to html tags for display
    const messages = props.messages.map((item, i) => <p key={i}>{item}</p>);

    return (
        <div
            className={["form-modal-bg", props.modalStatus && "form-big-active"]
                .filter((e) => !!e)
                .join(" ")}
            onClick={() => props.handleClose()}
        >
            <div className="form-modal">
                <h1>Form Error Box</h1>
                <div className="form-modal-box">{messages}</div>
                <button
                    className="form-modal-inner-confirm"
                    onClick={() => props.handleClose()}
                >
                    OK
                </button>
            </div>
        </div>
    );
}

export default FormErrorModal;
