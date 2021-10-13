import React, { useState, useEffect } from "react";
//import VideoImage from "../images/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-449.jpg";
import playImage from "../images/button-icon-png-21060.png";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToSavedVideos,
    removeFromSavedVideos,
    currentPlayVideo,
    backToLastPage,
} from "../redux/Actions.js";

const mapStateToProps = (state) => {
    return {
        videos: state.savedVideos,
    };
};

function LongVideoCard(props) {
    const dispatch = useDispatch();
    const [buttonvalue, buttonvaluehandler] = useState("");

    //checks if video saved and displays message on button accordingly
    useEffect(() => {
        function checkForVideo(vid) {
            return props.videos.some((vids) => vids.id === vid.id);
        }

        if (checkForVideo(props.vidProps)) {
            buttonvaluehandler("Remove from list");
        } else {
            buttonvaluehandler("Add to list");
        }
    }, [props.vidProps, props.videos]);

    //handles the change of button name based on the page the component is to be sent (m - mylist, c- category page)
    function handleSavedVideos(video) {
        if (props.page === "m") {
            if (props.button === "Add to list") {
                dispatch(addToSavedVideos(video));
            } else if (props.button === "Remove from list") {
                dispatch(removeFromSavedVideos(video));
            }
        } else if (props.page === "c") {
            if (buttonvalue === "Add to list") {
                dispatch(addToSavedVideos(video));
                buttonvaluehandler("Remove from list");
            } else if (buttonvalue === "Remove from list") {
                dispatch(removeFromSavedVideos(video));
                buttonvaluehandler("Add to list");
            }
        }
    }

    return (
        <div className="category-container">
            <div className="category-post">
                <Link
                    to="/play-video"
                    onClick={() => dispatch(backToLastPage(props.path))}
                >
                    <div
                        className="category-post-img"
                        onClick={() =>
                            dispatch(currentPlayVideo(props.vidProps))
                        }
                    >
                        <img src={props.vidProps.image} alt="" />
                        <img
                            src={playImage}
                            className="category-play-btn"
                            alt=""
                        />
                    </div>
                </Link>
                <div className="category-post-info">
                    <h1 className="category-post-title">
                        {props.vidProps.title}
                    </h1>
                    <p className="category-post-description">
                        {props.vidProps.description}
                    </p>
                    <button
                        className="category-post-button"
                        onClick={() => handleSavedVideos(props.vidProps)}
                    >
                        {props.page === "m" ? props.button : buttonvalue}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default connect(mapStateToProps)(LongVideoCard);
