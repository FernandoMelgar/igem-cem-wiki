import safetyBg2 from "./safety2.mp4";
import safetyBg3 from "./safety3.mp4";
import safetyBg4 from "./safety4.mp4";
import safetyBg5 from "./safety5.mp4";
import GlassCard from "../glass_card";
import * as React from "react";

export default function SectionContent(props) {
  return (
    <div className="relative hero min-h-screen">
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{ width: "100vw" }}
      >
        <source src={props.video} type="video/mp4" />
      </video>
      <div
        className="absolute hero-overlay h-3/4 w-10/12"
        style={{
          bottom: 100,
          right: 20,
          backgroundColor: "rgba(181,94,248,0.60)",
        }}
      >
        <div
          className="absolute hero-overlay text-neutral-content p-10"
          style={{ bottom: 0, right: 0 }}
        >
          <h1
            className="mb-5 text-9xl font-bold"
            style={{ fontFamily: "Cano", color: "rgb(255, 231, 135)" }}
          >
            {props.title}
          </h1>
          <p className="m-6 text-gray-600" style={{ color: "white" }}>
            {props.content}{" "}
          </p>
        </div>
      </div>
      <GlassCard title="Pepsico"></GlassCard>
    </div>
  );
}
