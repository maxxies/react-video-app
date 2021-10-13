import React from "react";
import "./MyList.css";
import LongVideoCard from "../Components/LongVideoCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        videos: state.savedVideos,
    };
};

function MyList(props) {
    //maps saved videos to component foe display when saved videos is not empty
    var vids;
    if (props.videos.length !== 0) {
        vids = props.videos.map((item, j) => {
            return (
                <LongVideoCard
                    key={j}
                    vidProps={item}
                    button="Remove from list"
                    page="m"
                    path="/my-list"
                />
            );
        });
    } else {
        // Sends message to be displayed when saved videos is empty
        vids = <p>You've got no saved videos yet. Start adding some?</p>;
    }
    return (
        <main className="home-body">
            <div className="mylist-title">
                <h2>Your videos</h2>
            </div>
            <div className="mylist-videos">{vids}</div>
        </main>
    );
}

export default connect(mapStateToProps)(MyList);
