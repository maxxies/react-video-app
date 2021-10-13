import React from "react";
import "./PlayVideo.css";
import { BsArrowLeft } from "react-icons/bs";
import VideoPlayer from "../Components/VideoPlayer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        path: state.lastPath,
        video: state.videoToPlay,
    };
};

function PlayVideo(props) {
    return (
        <main className="home-body">
            <Link to={props.path}>
                <div className="back-arrow">
                    <BsArrowLeft />
                </div>
            </Link>
            <VideoPlayer vid={props.video} />
        </main>
    );
}
export default connect(mapStateToProps)(PlayVideo);
