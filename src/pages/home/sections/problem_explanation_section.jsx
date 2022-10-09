import bg3Url from "../home_bg3.mp4";
import * as React from "react";

export default function ProblemExplanationSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw"}}>
                <source src={bg3Url} type="video/mp4"/>
            </video>
        </div>
    );
}