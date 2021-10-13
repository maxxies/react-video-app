import React, { useState, useRef, useEffect } from "react";
import "./Startpage.css";
import FormErrorModal from "../../Components/FormErrorModal";
import SignIn from "./images/undraw_welcome_cats_thqn.svg";
import SignUp from "./images/undraw_authentication_fsn5.svg";
import { useHistory } from "react-router-dom";

function Startpage() {
    const history = useHistory();
    /*Code below handles switch in startpages and modal */
    //States
    const [changePage, changePageHandler] = useState(true);
    const [errorMessages, errorMessageHandler] = useState([]);
    const [errorMessagesTwo, errorMessageTwoHandler] = useState([]);
    const [modalChange, modalChangehandler] = useState(false);
    const [accountError, accountErrorHandler] = useState(false);
    //Handles close of modal
    function closeModal() {
        modalChangehandler(false);
    }
    //Handles change for sign in page
    function pageChangeSignin() {
        changePageHandler(true);
    }
    //Handles change for sign up page
    function pageChangeSignup() {
        changePageHandler(false);
    }

    /* Code below handles user inputs, checks and submits form*/
    // User sign in refs
    const signinUser = useRef();
    const signinPassword = useRef();
    // User sign up refs
    const signupUser = useRef();
    const signupEmail = useRef();
    const signupPassword = useRef();
    const signupPasswordconfirm = useRef();

    //handles modal for errors
    useEffect(() => {
        if (errorMessages.length > 0) {
            modalChangehandler(true);
        }
    }, [errorMessages]);
    useEffect(() => {
        if (errorMessagesTwo.length > 0) {
            modalChangehandler(true);
        }
    }, [errorMessagesTwo]);

    useEffect(() => {
        setTimeout(() => {
            accountErrorHandler(false);
        }, 3000);
    }, [accountError]);

    function submitSigninHandler() {
        errorMessageHandler([]);
        errorMessageTwoHandler([]);
        //Sign in inputs
        let enteredSignInName = signinUser.current.value;
        let enteredSignInPassword = signinPassword.current.value;

        //Sign up inputs
        let enteredSignUpName = signupUser.current.value;
        let enteredSignUpEmail = signupEmail.current.value;
        let enteredSignUpPassword = signupPassword.current.value;
        let enteredSignUpPasswordconfirm = signupPasswordconfirm.current.value;

        // Form validation for pages
        let count = 0;
        var pattern = /^[a-zA-Z ]+$/;
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        //Checks sign in user details
        if (changePage) {
            if (enteredSignInName === "") {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Username is required",
                ]);
            } else if (enteredSignInName.match(pattern)) {
                count++;
            } else {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Your username must contain only letters",
                ]);
            }

            if (enteredSignInPassword === "") {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword is required",
                ]);
            } else if (enteredSignInPassword.length < 8) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must be at least 8 charaters long containing numerical values and special characters",
                ]);
            } else if (enteredSignInPassword.search(/[0-9]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a numerical value",
                ]);
            } else if (enteredSignInPassword.search(/[a-z]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a small letter",
                ]);
            } else if (enteredSignInPassword.search(/[A-Z]/) === -1) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a capital letter.",
                ]);
            } else if (
                enteredSignInPassword.search(/[!@#$%^&*()+.,?;'":]/) === -1
            ) {
                errorMessageHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a special character",
                ]);
            } else {
                count++;
            }
            // Checks user sign up details
        } else {
            if (enteredSignUpName === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Username is required",
                ]);
            } else if (enteredSignUpName.match(pattern)) {
                count++;
            } else {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Your username must contain only letters",
                ]);
            }

            if (enteredSignUpEmail === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Email is required",
                ]);
            } else if (enteredSignUpEmail.match(emailPattern)) {
                count++;
            } else {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Invalid email",
                ]);
            }

            if (enteredSignUpPassword === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword is required",
                ]);
            } else if (enteredSignUpPassword.length < 8) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must be at least 8 charaters long containing numerical values and special characters",
                ]);
            } else if (enteredSignUpPassword.search(/[0-9]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a numerical value",
                ]);
            } else if (enteredSignUpPassword.search(/[a-z]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a small letter",
                ]);
            } else if (enteredSignUpPassword.search(/[A-Z]/) === -1) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a capital letter.",
                ]);
            } else if (
                enteredSignUpPassword.search(/[!@#$%^&*()+.,?;'":]/) === -1
            ) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Password must contain at least a special character",
                ]);
            } else {
                count++;
            }

            if (enteredSignUpPassword === "") {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passsword confirmation is required",
                ]);
            } else if (enteredSignUpPassword !== enteredSignUpPasswordconfirm) {
                errorMessageTwoHandler((oldaArray) => [
                    ...oldaArray,
                    "Passwords do not match",
                ]);
            } else {
                count++;
            }
        }

        const signinData = {
            name: enteredSignInName,
            password: enteredSignInPassword,
        };
        const signupData = {
            name: enteredSignUpName,
            email: enteredSignUpEmail,
            password: enteredSignUpPassword,
        };
        //Checks dadtabase for user
        if (count === 2 && changePage === true) {
            fetch(
                "https://video-app-d61c2-default-rtdb.firebaseio.com/users.json",
            )
                .then((response) => response.json())
                .then((data) => {
                    const users = [];
                    for (const key in data) {
                        const user = {
                            id: key,
                            ...data[key],
                        };
                        users.push(user);
                    }
                    if (
                        users.some(
                            (obj) =>
                                obj.name === signinData.name &&
                                obj.password === signinData.password,
                        ) === true
                    ) {
                        console.log(signinData);
                        history.replace("/home");
                    } else {
                        //When user was not found
                        accountErrorHandler(true);
                    }
                });
        }
        //sends user details to database
        else if (count === 4 && changePage === false) {
            fetch(
                "https://video-app-d61c2-default-rtdb.firebaseio.com/users.json", //https://video-app-d61c2-default-rtdb.firebaseio.com/messages.json
                {
                    method: "POST",
                    body: JSON.stringify(signupData),
                    headers: {
                        "Content-type": "application/json",
                    },
                },
            )
                .then(() => {
                    history.replace("/home");
                })
                .catch((error) => {
                    alert("Something went wrong. ", error.message);
                });
        }
    }

    return (
        <div
            className={["container", !changePage && "sign-up-mode"]
                .filter((e) => !!e)
                .join(" ")}
        >
            {modalChange && (
                <FormErrorModal
                    messages={changePage ? errorMessages : errorMessagesTwo}
                    handleClose={closeModal}
                    modalStatus={modalChange}
                />
            )}
            <div className="forms-container">
                <div className="signin-signup">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="sign-in-form"
                    >
                        <h2 className="title">Sign In</h2>
                        {accountError && (
                            <div className="server-message">
                                Account not found
                            </div>
                        )}
                        <div className="input-field">
                            <input
                                type="text"
                                id="login-username"
                                placeholder="Username"
                                ref={signinUser}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="login-password"
                                placeholder="Password"
                                ref={signinPassword}
                            />
                        </div>
                        <input
                            type="submit"
                            id="login-submit"
                            value="Login"
                            className="btn solid"
                            onClick={submitSigninHandler}
                        />
                    </form>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        className="sign-up-form"
                    >
                        <h2 className="title">Sign Up</h2>
                        {/* <!-- <div className="server-message"></div> --> */}
                        <div className="input-field">
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                ref={signupUser}
                            />
                        </div>

                        <div className="input-field">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                ref={signupEmail}
                            />
                        </div>
                        <div className="msg-two"></div>
                        <div className="input-field">
                            <input
                                type="password"
                                id="password1"
                                placeholder="Password"
                                ref={signupPassword}
                            />
                        </div>

                        <div className="input-field">
                            <input
                                type="password"
                                id="password2"
                                placeholder="Confirm Password"
                                ref={signupPasswordconfirm}
                            />
                        </div>

                        <input
                            type="submit"
                            id="submit-btn"
                            value="Register"
                            className="btn solid"
                            onClick={submitSigninHandler}
                        />
                    </form>
                </div>
            </div>

            <div className="panel-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ab, sit.
                        </p>
                        <button
                            className="btn transparent"
                            id="sign-up-btn"
                            onClick={pageChangeSignup}
                        >
                            Sign Up
                        </button>
                    </div>
                    <img src={SignIn} className="image" alt="Sign up logo" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Have an account?</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda id cumque sit?
                        </p>
                        <button
                            className="btn transparent"
                            id="sign-in-btn"
                            onClick={pageChangeSignin}
                        >
                            Sign In
                        </button>
                    </div>
                    <img src={SignUp} className="image" alt="Sign in logo" />
                </div>
            </div>
        </div>
    );
}

export default Startpage;
