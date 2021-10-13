import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { addToSavedVideos, removeFromSavedVideos } from "../redux/Actions.js";

const mapStateToProps = (state) => {
    return {
        videos: state.savedVideos,
    };
};

function VideoPlayer(props) {
    const dispatch = useDispatch();
    const [buttonvalue, buttonvaluehandler] = useState("");

    //hooks handles button name
    useEffect(() => {
        function checkForVideo(vid) {
            return props.videos.some((vids) => vids.id === vid.id);
        }

        if (checkForVideo(props.vid)) {
            buttonvaluehandler("Remove from list");
            console.log("hi hii");
        } else {
            buttonvaluehandler("Add to list");
        }
    }, [props.vid, props.videos]);

    //handless button name and dispatches actions accordingly
    function handleSavedVideos(video) {
        if (buttonvalue === "Add to list") {
            dispatch(addToSavedVideos(video));
            buttonvaluehandler("Remove from list");
        } else if (buttonvalue === "Remove from list") {
            dispatch(removeFromSavedVideos(video));
            buttonvaluehandler("Add to list");
        }
    }
    return (
        <div className="video-box">
            <div className="video-player">
                <video width="100%" controls autoplay loop preload="auto">
                    <source src={props.vid.sources} type="video/mp4" />
                </video>
                <div>
                    <h1 className="video-player-title">{props.vid.title}</h1>
                    <button
                        className="video-player-post-button"
                        onClick={() => handleSavedVideos(props.vid)}
                    >
                        {buttonvalue}
                    </button>
                </div>

                <p className="video-player-info">{props.vid.description}</p>
            </div>
        </div>
    );
}
export default connect(mapStateToProps)(VideoPlayer);
