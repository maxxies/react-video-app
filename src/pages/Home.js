import React, { useRef } from "react";
import "./Home.css";
import spinner from "../images/loading-gif.gif";
import CategoryCard from "../Components/CategoryCard";
import { connect, useDispatch } from "react-redux";
import { searchVideo } from "../redux/Actions.js";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        errorMessage: state.errorMessage,
        videos: state.allVideos,
    };
};

function Home(props) {
    const search = useRef();
    const dispatch = useDispatch();

    //Dispalys a loading view when app is fetching videodata from database
    if (props.loading) {
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
                <div className="home-loading-bg">
                    <div className="loading-spinner">
                        <img src={spinner} alt="" />
                    </div>
                </div>
            </main>
        );
    }

    //Maps videos to component
    const categoryCard = props.videos.map((items, i) => {
        return (
            <CategoryCard
                key={i}
                videoObject={Object.values(items)}
                index={i}
            />
        );
    });

    //Function handles input text fro submission for search to be made
    function handleSearch() {
        const searchvideo = search.current.value;
        if (searchvideo !== "") {
            //Checks if vlaue is empty
            dispatch(searchVideo(searchvideo));
        } else {
            alert("The search field is required");
        }
    }
    return (
        <main className="home-body">
            <h1 className="heading">My Video App</h1>
            <form className="search-box" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search here..."
                    name="searchBox"
                    className="search-bar"
                    ref={search}
                />
                <Link to="/search">
                    <input
                        type="submit"
                        name="submit"
                        className="search-btn"
                        onClick={() => handleSearch()}
                    />
                </Link>
            </form>
            {categoryCard}
        </main>
    );
}

export default connect(mapStateToProps)(Home);
