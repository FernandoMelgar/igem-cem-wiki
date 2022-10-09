import Page, {PageWithBackgroundVideo} from "../components/page";
import bg2Url from "../pages/home/home_bg2.mp4";
import ArrowDownSvg from "./home/components/arrow_down_svg";
import Modal from "../components/modal";
import * as React from "react";

export default function DemoPage() {
    return (
        <PageWithBackgroundVideo videoUrl={bg2Url}>
            <div className="p-32 text-center flex flex-col justify-between">
                <div>
                    <h1 className="text-8xl text-white"> HYDRO DEFENSE </h1>
                    <h2 className="text-2xl text white tracking-widest text-white">DEFENDING CROPS AGAINST
                        DISRUPTORS</h2>
                </div>
                <div className="swipe-down-container flex flex-col justify-center">
                    <a className="block text-2xl text-white pb-4">Swipe down</a>
                    <ArrowDownSvg/>
                </div>
                <label htmlFor="my-modal-3" className="btn modal-button">open modal</label>

                <Modal modalId="my-modal-3">
                    <p>pppp</p>
                </Modal>
            </div>
        </PageWithBackgroundVideo>
    );
}