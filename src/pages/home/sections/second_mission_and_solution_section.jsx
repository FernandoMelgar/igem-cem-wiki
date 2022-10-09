import bg5Url from "../home_bg5.mp4";
import * as React from "react";

export default function SecondMissionAndSolutionSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw"}}>
                <source src={bg5Url} type="video/mp4"/>
            </video>
        </div>
    );
}