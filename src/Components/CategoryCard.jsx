import React from "react";
import ShortVideoCard from "../Components/ShortVideoCard";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showCategoryVideos } from "../redux/Actions.js";

function CategoryCard(props) {
    const dispatch = useDispatch();
    //from the videos sent as props, maps only the firts four videos to the component
    var videos;
    videos = props.videoObject
        .filter((items) => typeof items === "object")
        .slice(0, 4)
        .map((item, j) => {
            return <ShortVideoCard key={j} vidProps={item} />;
        });
    //Gets category title for the category page
    var categorytitle;

    for (const j in props.videoObject) {
        if (typeof props.videoObject[j] !== "object") {
            categorytitle = props.videoObject[j];
        }
    }

    return (
        <div className="category-video">
            <div>
                <Link
                    to="/category"
                    onClick={() => dispatch(showCategoryVideos(props.index))}
                >
                    <div className="category-title">
                        <h2>{categorytitle}</h2>
                        <i>
                            <BsArrowRight />
                        </i>
                    </div>
                </Link>

                <div className="video-container">{videos}</div>
            </div>
        </div>
    );
}
export default CategoryCard;
