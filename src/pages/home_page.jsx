import {Link} from "react-router-dom";
import * as React from "react";
import Header from "../components/header";
import IgemHero from "../components/igem_hero";
import AboutUsSection from "../sections/about_us_section";
import IgemFooter from "../sections/footer_section";
import ExperimentInfo from "../sections/experiment_info";
import {ContentBox} from "../components/content_box";
import ThreeDisplaySection from "../sections/three_display_section";
import InfoOverview from "../components/info_overview";

export default function Home() {
    return (
        <div>
            <Header></Header>
            <IgemHero></IgemHero>
            <AboutUsSection></AboutUsSection>
            <ExperimentInfo></ExperimentInfo>
            <ContentBox></ContentBox>
            <ThreeDisplaySection></ThreeDisplaySection>
            <InfoOverview></InfoOverview>
            <IgemFooter></IgemFooter>
        </div>
    );
}