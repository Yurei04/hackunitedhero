"use client"
import Image from "next/image";
import SpotlightCard from "../spotLightCard";
import TextType from "../textType";


export default function TextHero () {
    const textContent = "A 501(c)(3) non-profit organization that develops the soft skills in tech interested youth through hands on application, such as our flagship hackathons."

    return (
        <div className="flex flex-col items-center lg:items-baseline  sm:items-center @min-xs:items-center lg:justify-start md:justify-center">
            <div className="flex flex-row gap-4 justify-start">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="w-[25px] h-[25px]">
                  <Image
                    height={100}
                    width={100}
                    src="/images/HackUnited2.png"
                    alt="HackUnitedLogo"
                    className="rounded-2xl"
                  />
                </div>
              </SpotlightCard>
              <SpotlightCard className="flex items-center justify-center p-2" spotlightColor="rgba(0, 229, 255, 0.2)">
                <TextType
                  text={["Text typing effect", "for your websites", "Happy coding!"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </SpotlightCard>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-8xl text-start font-extrabold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500">
                Hack United
              </span>
            </h1>
            <div className="w-1/2 h-auto flex items-center justify-center">
              <p className="text-xl sm:text-md lg:text-lg">
                {textContent}
              </p>
            </div>
            
          </div>
    )
}