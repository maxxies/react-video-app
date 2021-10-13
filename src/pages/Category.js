import React from "react";
import "./Category.css";
import { BsArrowLeft } from "react-icons/bs";
import LongVideoCard from "../Components/LongVideoCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        videos: state.allVideos,
        categoryId: state.categoryId,
    };
};

function Category(props) {
    //Gets videos for componet for view
    var allVideos;
    allVideos = Object.values(props.videos[props.categoryId])
        .filter((items) => typeof items === "object")
        .map((item, j) => {
            return (
                <LongVideoCard
                    key={j}
                    vidProps={item}
                    button="Add to list"
                    page="c"
                    path="/home"
                />
            );
        });

    // Gets title for category page
    var categorytitle;

    for (const j in props.videos[props.categoryId]) {
        if (typeof props.videos[props.categoryId][j] !== "object") {
            categorytitle = props.videos[props.categoryId][j];
        }
    }

    return (
        <main className="home-body">
            <Link to="/home">
                <div className="back-arrow">
                    <BsArrowLeft />
                </div>
            </Link>
            <div className="category-page-title">
                <h2>{categorytitle}</h2>
            </div>
            <div className="category-videos">{allVideos}</div>
        </main>
    );
}
export default connect(mapStateToProps)(Category);
