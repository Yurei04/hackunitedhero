"use client"
import Image from "next/image";
import DarkVeil from "../darkVeil";

export default function LogoHero () {
    return (
        <div className="relative flex flex-col items-center justify-center w-[300px] h-[300px] overflow-hidden border rounded-2xl border-violet-500">
            <div className="absolute inset-0 z-0 rounded-2xl ">
                <DarkVeil />
            </div>
            <div className="relative z-10 w-[300px] h-[300px] mx-auto rounded-3xl">
                <Image
                    height={300}
                    width={300}
                    src="/images/HackUnited2NoBkg.png"
                    alt="HackUnitedLogo"
                    className="rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
        </div>
    );
}
