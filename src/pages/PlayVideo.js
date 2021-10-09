import React from "react";
import "./PlayVideo.css";
import { BsArrowLeft } from "react-icons/bs";
import VideoPlayer from "../Components/VideoPlayer";

function PlayVideo() {
    return (
        <main className="home-body">
            <div className="back-arrow">
                <BsArrowLeft />
            </div>
            <VideoPlayer />
        </main>
    );
}
export default PlayVideo;
