import React from "react";
import VideoImage from "../images/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-449.jpg";
import playImage from "../images/button-icon-png-21060.png";

function LongVideoCard() {
    return (
        <div className="category-container">
            <div className="category-post">
                <div className="category-post-img">
                    <img src={VideoImage} alt="" />
                    <img src={playImage} className="category-play-btn" alt="" />
                </div>
                <div className="category-post-info">
                    <h1 className="category-post-title">Hello Im a title.</h1>
                    <p className="category-post-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Earum nisi, quidem quasi corporis sequi excepturi
                        pariatur deleniti explicabo quibusdam. Fugiat. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime, laborum.
                    </p>
                    <button className="category-post-button">
                        Add to list
                    </button>
                </div>
            </div>
        </div>
    );
}
export default LongVideoCard;
