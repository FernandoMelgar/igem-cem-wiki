import bg2Url from "../home_bg2.mp4";
import * as React from "react";

export default function EndocrineDisruptiveSection() {
    return (
        <div className="hero">
            <video
                className="videoTag full-video-bg"
                autoPlay
                loop
                muted
                style={{width: "100vw", zIndex: -1}}>
                <source src={bg2Url} type="video/mp4"/>
            </video>
            <div className="text-center py-24 px-20" style={{
                width: '100%',
                height: '90%'
            }}>
                <div className="px-8 py-4 rounded-md inline-block"
                     style={{
                         width: 800,
                         backgroundColor: "rgba(62,142,131,0.50)",
                         borderColor: "rgb(96,218,203)",
                         borderWidth: 2
                     }}>
                    <h2 className="cano text-3xl text-white"
                        style={{
                            display: "inline-block",
                        }}> ENDOCRINE DISRUPTING </h2>
                    <h1 className="text-8xl" style={{color: 'rgb(228,0,0)'}}> CHEMICALS</h1>
                    <p className="text-white max-w-md m-auto ">
                        Chemically complex molecules structurally similar
                        to steroids and hormones, originated
                        from a variety of pollutants.
                    </p>
                </div>
                <div className="flex" style={{height: '50%'}}>
                    <div className="flex-1 flex self-end">
                        <a className="inline-block text-lg font-bold p-4 text-white" style={{
                            width: 220,
                            borderRadius: 4,
                            bottom: 200,
                            left: 0,
                            backgroundColor: "rgba(62,142,131,0.50)",
                            borderColor: "rgb(96,218,203)",
                            borderWidth: 2
                        }}>
                            These compounds are key players in
                            hormone disruption, thus biasing vital
                            functions in all lifeforms.
                        </a>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute flex flex-col justify-between " style={{right: 0, height: '100%'}}>
                            <p className="block max-w-md text-lg text-white rounded-md"
                              >
                                The LD50 lethal dose of BPA in rodents is
                                5 g/kg of body weight. In humans being
                                6.5 g/kg (EFSA, 2019)
                            </p>
                            <a className="btn cano" style={{
                                backgroundColor: "transparent",
                                borderColor: "white",
                                borderWidth: 2
                            }}> Go to Project Description</a>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}