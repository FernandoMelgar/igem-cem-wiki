import videoUrl from "../home_bg1.mp4";
import ArrowDownSvg from "../components/arrow_down_svg";
import * as React from "react";
import Modal from "../../../components/modal";

export default function HydroDefenseSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw", zIndex: -1}}>
                <source src={videoUrl} type="video/mp4"/>
            </video>
            <div className=" w-full h-full p-32 text-center flex flex-col justify-between">
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
        </div>
    );
}