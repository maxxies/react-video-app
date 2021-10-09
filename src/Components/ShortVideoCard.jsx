import React from "react";
import VideoImage from "../images/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-449.jpg";
import playImage from "../images/button-icon-png-21060.png";

function ShortVideoCard() {
    return (
        <div className="single-video-container">
            <div className="single-video-card">
                <img src={VideoImage} alt="" />
                <img src={playImage} className="play-btn" alt="" />
                <h3>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus, dolore!
                </h3>
            </div>
        </div>
    );
}
export default ShortVideoCard;
