import SectionContent from "../components/section/fullwidth_image_section";
import safety1 from "../components/section/safety1.mp4";
import safety2 from "../components/section/safety2.mp4";
import safety3 from "../components/section/safety3.mp4";
import safety4 from "../components/section/safety4.mp4";
import safety5 from "../components/section/safety5.mp4";


const info = [
    {
        title: "PROBLEM",
        video: safety1,
        content: "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic? "
    },
    {
        title: "SOLUTION",
        video: safety2,
        content: "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic? "
    },
    {
        title: "DESIGN",
        video: safety3,
        content: "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic? "
    },
    {
        title: "RESULTS",
        video: safety4,
        content: "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic? "
    },
    {
        title: "Garanteed",
        video: safety5,
        content: "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic? "
    }
];


export default function SafetyProjectPage() {
    return (
        <div>
            <SectionContent title={info[0].title} content={info[0].content} video={info[0].video}/>
            <SectionContent title={info[1].title} content={info[1].content} video={info[1].video}/>
            <SectionContent title={info[2].title} content={info[2].content} video={info[2].video}/>
            <SectionContent title={info[3].title} content={info[3].content} video={info[3].video}/>
        </div>
    );
}