import React from "react";
import "./Search.css";
import playImage from "../images/button-icon-png-21060.png";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, connect } from "react-redux";
import { currentPlayVideo, backToLastPage } from "../redux/Actions.js";

const mapStateToProps = (state) => {
    return {
        videos: state.allVideos,
        videoName: state.videoToSearch,
    };
};

function Search(props) {
    const dispatch = useDispatch();
    var output;
    //Extracts all videos into array
    var arr = [];
    for (let i = 0; i < props.videos.length; i++) {
        const vids = {
            ...props.videos[i],
        };
        for (const j in vids) {
            if (typeof vids[j] === "object") {
                const vid = {
                    ...vids[j],
                };
                arr.push(vid);
            }
        }
    }
    //Checks if video is in array
    if (
        arr.some(
            (videos) =>
                videos.title.toLowerCase() === props.videoName.toLowerCase(),
        )
    ) {
        //gets video from array to be displayed to user
        var result = arr.filter(
            (obj) => obj.title.toLowerCase() === props.videoName.toLowerCase(),
        );
        output = (
            <div>
                <div className="category-container">
                    <div className="category-post">
                        <Link
                            to="/play-video"
                            onClick={() => dispatch(backToLastPage("./home"))}
                        >
                            <div
                                className="category-post-img"
                                onClick={() =>
                                    dispatch(currentPlayVideo(result[0]))
                                }
                            >
                                <img src={result[0].image} alt="" />
                                <img
                                    src={playImage}
                                    className="category-play-btn"
                                    alt=""
                                />
                            </div>
                        </Link>
                        <div className="category-post-info">
                            <h1 className="search-post-title">
                                {result[0].title}
                            </h1>
                            <p className="search-post-description">
                                {result[0].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        //sends message when video to be searched is not found
        output = <p>No video found.</p>;
    }
    return (
        <main className="home-body">
            <Link to="/home">
                <div className="back-arrow">
                    <BsArrowLeft />
                </div>
            </Link>
            <div className="search-title">
                <h2>Your search</h2>
            </div>
            <div className="search-video">{output}</div>
        </main>
    );
}

export default connect(mapStateToProps)(Search);
