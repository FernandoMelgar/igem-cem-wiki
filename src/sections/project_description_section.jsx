import {Table} from "react-daisyui";
import DisplayInfoImgLeft from "../components/display_info/display_info_img_left";
import DisplayInfoCenter from "../components/display_info/display_info_center";

const info = [
    {
        title: "Project Description",
        imgUrl: "https://tailus.io/sources/blocks/left-image/preview/images/startup.png",
        paragraphs: [
            "Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern that will only worsen with the passing of time. This problem was approached by our past team (iGEM TecCEM 2021) and we still believe in the necessity of obtaining practical solutions, thus we are working this year around improving the past work but also going further by proposing a practical solution. But what are EDCs and why is it problematic?",

        ]
    },
    {
        title: "The Danger Agent, What is an EDC?",
        paragraphs: [
            "An EDC (Endocrine Disrupting Chemical) are substances present in the environment; anywhere from the soil to the air we breathe and even in the water we drink and the food we eat. According to the U.S. Environmental Protection Agency an EDC is: “an exogenous agent that interferes with synthesis, secretion, transport, metabolism, binding action, or elimination of natural blood-borne hormones that are present in the body and are responsible for homeostasis, reproduction, and developmental process.”[1]",
            "An EDC (Endocrine Disrupting Chemical) are substances present in the environment; anywhere from the soil to the air we breathe and even in the water we drink and the food we eat. According to the U.S. Environmental Protection Agency an EDC is: “an exogenous agent that interferes with synthesis, secretion, transport, metabolism, binding action, or elimination of natural blood-borne hormones that are present in the body and are responsible for homeostasis, reproduction, and developmental process.”[1]",
        ]
    }
]

export default function ProjectDescriptionSection() {
    return (
        <div className="py-16 bg-white">
            <DisplayInfoImgLeft
                title={info[0].title}
                paragraphs={info[0].paragraphs}
                imgUrl={info[0].imgUrl}
            />
            <DisplayInfoCenter
                title={info[1].title}
                paragraphs={info[1].paragraphs}
            />
        </div>

    );
}
