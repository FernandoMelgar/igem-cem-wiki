import * as React from "react";

export default function Page(props) {
    return (
        <div className="p-20">
            {props.children}
        </div>
    )
}

export function PageWithBackgroundVideo(props) {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{
                    width: "100vw",
                    zIndex: -1
                }}>
                <source src={props.videoUrl} type="video/mp4"/>
            </video>
            <div className="w-full h-full">
                {props.children}
            </div>
        </div>
    )
}