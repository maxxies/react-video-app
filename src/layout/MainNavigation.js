import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { VscHome, VscSignOut } from "react-icons/vsc";
import { MdPlaylistPlay } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function MainNavigation() {
    const [page, pagehandler] = useState("Home");
    const [toggle, togglehandler] = useState(false);

    function changePage(newPage) {
        pagehandler(newPage);
    }
    function changeToggle(toggle) {
        togglehandler(!toggle);
    }
    return (
        <main>
            <header>
                <div
                    className={[classes.navigation, toggle && classes.active]
                        .filter((e) => !!e)
                        .join(" ")}
                >
                    <ul>
                        <li
                            className={[
                                classes.list,
                                page === "Home" && classes.active,
                            ]
                                .filter((e) => !!e)
                                .join(" ")}
                        >
                            <b></b>
                            <b></b>
                            <Link
                                className={classes.link}
                                to="/home"
                                onClick={() => changePage("Home")}
                            >
                                <span className={classes.icon}>
                                    <i>
                                        <VscHome />
                                    </i>
                                </span>
                                <span className={classes.title}>Home</span>
                            </Link>
                        </li>
                        <li
                            className={[
                                classes.list,
                                page === "Mylist" && classes.active,
                            ]
                                .filter((e) => !!e)
                                .join(" ")}
                        >
                            <b></b>
                            <b></b>
                            <Link
                                className={classes.link}
                                to="/my-list"
                                onClick={() => changePage("Mylist")}
                            >
                                <span className={classes.icon}>
                                    <i>
                                        <MdPlaylistPlay />
                                    </i>
                                </span>
                                <span className={classes.title}>My List</span>
                            </Link>
                        </li>
                        <li
                            className={[
                                classes.list,
                                page === "Setting" && classes.active,
                            ]
                                .filter((e) => !!e)
                                .join(" ")}
                        >
                            <b></b>
                            <b></b>
                            <Link
                                className={classes.link}
                                to="/home"
                                onClick={() => changePage("Setting")}
                            >
                                <span className={classes.icon}>
                                    <i>
                                        <FiSettings />
                                    </i>
                                </span>
                                <span className={classes.title}>Setting</span>
                            </Link>
                        </li>
                        <li
                            className={[
                                classes.list,
                                page === "Help" && classes.active,
                            ]
                                .filter((e) => !!e)
                                .join(" ")}
                        >
                            <b></b>
                            <b></b>
                            <Link
                                className={classes.link}
                                to="/help"
                                onClick={() => changePage("Help")}
                            >
                                <span className={classes.icon}>
                                    <i>
                                        <BiHelpCircle />
                                    </i>
                                </span>
                                <span className={classes.title}>Help</span>
                            </Link>
                        </li>
                        <li
                            className={[
                                classes.list,
                                page === "Logout" && classes.active,
                            ]
                                .filter((e) => !!e)
                                .join(" ")}
                        >
                            <b></b>
                            <b></b>
                            <Link
                                className={classes.link}
                                to="/home"
                                onClick={() => changePage("Logout")}
                            >
                                <span className={classes.icon}>
                                    <i>
                                        <VscSignOut />
                                    </i>
                                </span>
                                <span className={classes.title}>Log out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div
                className={[classes.toggle, toggle && classes.active]
                    .filter((e) => !!e)
                    .join(" ")}
                onClick={() => changeToggle(toggle)}
            >
                <i className={classes.open}>
                    <IoMdMenu />
                </i>
                <i className={classes.close}>
                    <IoMdClose />
                </i>
            </div>
        </main>
    );
}
export default MainNavigation;
