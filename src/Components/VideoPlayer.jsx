import React from "react";

function VideoPlayer() {
    return (
        <div className="video-box">
            <div className="video-player">
                <video width="100%" controls autoplay loop preload="auto">
                    <source
                        src="C:\Users\user\Downloads\Video\How to Dance the Top 5 Afro Dance Moves of 2020 (Legwork, Moonwalk, Network) - Chop Daily.mkv"
                        type="video/mp4"
                    />
                </video>
                <div>
                    <h1 className="video-player-title">Title</h1>
                    <button className="video-player-post-button">
                        Add to list
                    </button>
                </div>

                <p className="video-player-info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci repudiandae beatae ab corrupti labore pariatur,
                    velit eius mollitia alias dolorem facere voluptates soluta
                    quos maxime debitis ex, sapiente delectus voluptas.
                </p>
            </div>
        </div>
    );
}
export default VideoPlayer;
