import * as React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home_page";
import LogBookPage from "./pages/logbook_page";
import SafetyProjectPage from "./pages/safety_project_page";
import Header from "./components/header";
import IgemFooter from "./sections/footer_section";
import LaboratoryPage from "./pages/laboratory_page";
import TeamPage from "./pages/team/team_page";
import SocialImpactPage from "./pages/social_impact/social_impact_page";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<LogBookPage/>}/>
                <Route path="/laboratory" element={<LaboratoryPage/>}/>
                <Route path="/laboratory/safety" element={<SafetyProjectPage/>}/>
                <Route path="/team" element={<TeamPage/>}/>
                <Route path="/social-impact" element={<SocialImpactPage/>}/>
            </Routes>
            <IgemFooter/>
        </div>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>That feels like an existential question, don't you think?</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}
