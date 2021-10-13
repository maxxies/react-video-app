import React from "react";
//import VideoImage from "../images/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-449.jpg";
import playImage from "../images/button-icon-png-21060.png";
import { useDispatch } from "react-redux";
import { currentPlayVideo,backToLastPage } from "../redux/Actions.js";
import { Link } from "react-router-dom";

function ShortVideoCard(props) {
    const dispatch = useDispatch();
    return (
        <div className="single-video-container">
            <Link to="/play-video" onClick={() => dispatch(backToLastPage('/home'))}>
                <div
                    className="single-video-card"
                    onClick={() => dispatch(currentPlayVideo(props.vidProps))}
                >
                    <img src={props.vidProps.image} alt="" />
                    <img src={playImage} className="play-btn" alt="" />
                    <h3>{props.vidProps.title}</h3>
                </div>
            </Link>
        </div>
    );
}
export default ShortVideoCard;
