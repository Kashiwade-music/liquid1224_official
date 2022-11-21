import React from "react";
import "../styles/posts.css"

const RANDOM_IMG="https://source.unsplash.com/collection/175083/640x360"

export default function Posts(){
    return(
        <div className="posts">
            <div>
                <img src={RANDOM_IMG} className="posts-image"></img>
            </div>
            <div className="posts-text">
                <h2>Dummy</h2>
                <p className="posts-body">hogehoge</p>
                <p className="posts-date">2022/11/21</p>
            </div>
        </div>
    )
}