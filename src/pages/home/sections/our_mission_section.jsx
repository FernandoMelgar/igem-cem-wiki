import bg4Url from "../home_bg4.mp4";
import * as React from "react";

export default function OurMissionSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw"}}>
                <source src={bg4Url} type="video/mp4"/>
            </video>
        </div>
    );
}