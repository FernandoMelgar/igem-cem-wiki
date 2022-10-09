import bg6Url from "../home_bg6.mp4";
import * as React from "react";

export default function EndingSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw"}}>
                <source src={bg6Url} type="video/mp4"/>
            </video>
        </div>
    );
}