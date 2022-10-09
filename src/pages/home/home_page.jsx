import videoUrl from "./home_bg1.mp4";
import bg2Url from "./home_bg2.mp4";
import bg3Url from "./home_bg3.mp4";
import bg4Url from "./home_bg4.mp4";
import bg5Url from "./home_bg5.mp4";
import bg6Url from "./home_bg6.mp4";
import * as React from "react";
import ArrowDownSvg from "./components/arrow_down_svg";
import HydroDefenseSection from "./sections/hydro_defense_section";
import EndocrineDisruptiveSection from "./sections/endocrine_disruptive_section";
import ProblemExplanationSection from "./sections/problem_explanation_section";
import OurMissionSection from "./sections/our_mission_section";
import SecondMissionAndSolutionSection from "./sections/second_mission_and_solution_section";
import EndingSection from "./sections/ending_section";

export default function HomePage() {
    return (
        <div>
            <HydroDefenseSection/>
            <EndocrineDisruptiveSection/>
            <ProblemExplanationSection/>
            <OurMissionSection/>
            <SecondMissionAndSolutionSection/>
            <EndingSection/>
        </div>
    );
}
