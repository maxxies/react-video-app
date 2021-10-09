import React from "react";
import "./Home.css";
import ShortVideoCard from "../Components/ShortVideoCard";
import CategoryCard from "../Components/CategoryCard";

function Home() {
    return (
        <main className="home-body">
            <h1 className="heading">My Video App</h1>
            <form className="search-box">
                <input
                    type="text"
                    placeholder="Search here..."
                    name="searchBox"
                    className="search-bar"
                />
                <input type="submit" name="submit" className="search-btn" />
            </form>
            <CategoryCard>
                {" "}
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
            </CategoryCard>
            <CategoryCard>
                {" "}
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
            </CategoryCard>
            <CategoryCard>
                {" "}
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
                <ShortVideoCard />
            </CategoryCard>
        </main>
    );
}

export default Home;
