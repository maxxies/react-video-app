import React from "react";
import { BsArrowRight } from "react-icons/bs";

function CategoryCard(props) {
    return (
        <div className="category-video">
            <div>
                <div className="category-title">
                    <h2>Category 1</h2>
                    <i>
                        <BsArrowRight />
                    </i>
                </div>

                <div className="video-container">{props.children}</div>
            </div>
        </div>
    );
}
export default CategoryCard;
