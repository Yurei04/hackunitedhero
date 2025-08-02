"use client"
import Image from "next/image";
import FaultyTerminal from "../faultyTerminal";
import SpotlightCard from "../spotLightCard";
import TextType from "../textType";

export default function LogoHero () {
    return (
        <div className="relative flex flex-col items-center justify-center w-[250px] h-[250px] rounded-2xl ">
            <div className="absolute inset-0 z-0 rounded-2xl ">
                <FaultyTerminal
                    scale={1}
                    gridMul={[2, 1]}
                    digitSize={2}
                    timeScale={1}
                    pause={false}s
                    scanlineIntensity={0.5}
                    glitchAmount={0.5}
                    flickerAmount={0.5}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.8}
                    tint="#7F00FF"
                    mouseReact={false}
                    mouseStrength={0.5}
                    pageLoadAnimation={false}
                    brightness={0.8}
                />
            </div>
            <div className="relative z-10 w-[250px] h-[250px] mx-auto rounded-3xl flex items-center justify-center border border-violet-500">
                <Image
                    height={300}
                    width={300}
                    src="/images/HackUnited2.png"
                    alt="HackUnitedLogo"
                    className="cursor-target rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 "
                />
            </div>

        </div>
    );
}
