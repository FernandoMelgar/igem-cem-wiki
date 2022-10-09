import * as React from "react";
import ArrowDownSvg from "./components/arrow_down_svg";
import EndocrineDisruptiveSection from "./sections/endocrine_disruptive_section";
import ProblemExplanationSection from "./sections/problem_explanation_section";
import OurMissionSection from "./sections/our_mission_section";
import SecondMissionAndSolutionSection from "./sections/second_mission_and_solution_section";
import EndingSection from "./sections/ending_section";
import Page, {PageWithBackgroundVideo} from "../../components/page";
import bg1 from "./home_bg1.mp4";
import bg2 from "./home_bg2.mp4";


export default function HomePage() {
    return (
        <div>
            <PageWithBackgroundVideo className="hydro-defense-section" videoUrl={bg1}>
                <div className="h-full w-full p-32 text-center flex flex-col justify-between">
                    <div>
                        <h1 className="text-8xl text-white"> HYDRO DEFENSE </h1>
                        <h2 className="text-2xl text white tracking-widest text-white">DEFENDING CROPS AGAINST
                            DISRUPTORS</h2>
                    </div>
                    <div className="swipe-down-container flex flex-col justify-center">
                        <a className="block text-2xl text-white pb-4">Swipe down</a>
                        <ArrowDownSvg/>
                    </div>
                </div>
            </PageWithBackgroundVideo>
            <PageWithBackgroundVideo videoUrl={bg2}>
                <div className="h-full w-full p-16">
                    <div className="flex flex-col content-center justify-center text-center">
                        <h2 className="text-3xl text-white cano ">Endocrine Disrupting</h2>
                        <h1 className="text-6xl cano" style={{color: 'rgb(224,33,33)'}}>Chemicals</h1>
                        <p className="text-lg text-white max-w-sm m-auto">
                            Chemically complex molecules structurally similar
                            Chemically complex molecules structurally similar
                            to steroids and hormones, originated
                            from a variety of pollutants...
                        </p>
                    </div>

                </div>
            </PageWithBackgroundVideo>
            <EndocrineDisruptiveSection/>
            <ProblemExplanationSection/>
            <OurMissionSection/>
            <SecondMissionAndSolutionSection/>
            <EndingSection/>
        </div>
    );
}
