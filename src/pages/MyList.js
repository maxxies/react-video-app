import React from "react";
import "./MyList.css";
import LongVideoCard from "../Components/LongVideoCard";

function MyList() {
    return (
        <main className="home-body">
            <div className="mylist-title">
                <h2>Your videos</h2>
            </div>
            <div className="mylist-videos">
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

export default MyList;
