import React from "react";
import "./Category.css";
import { BsArrowLeft } from "react-icons/bs";
import LongVideoCard from "../Components/LongVideoCard";

function Category() {
    return (
        <main className="home-body">
            <div className="back-arrow">
                <BsArrowLeft />
            </div>
            <div className="category-page-title">
                <h2>Category</h2>
            </div>
            <div className="category-videos">
                <LongVideoCard />
                <LongVideoCard />
                <LongVideoCard />
                <LongVideoCard />
                <LongVideoCard />
                <LongVideoCard />
            </div>
        </main>
    );
}
export default Category;
