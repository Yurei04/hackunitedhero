  "use client"
  import Image from "next/image";
  import SpotlightCard from "../spotLightCard";
  import TextType from "../textType";
  import ButtonHero from "./button";
import RotatingText from "../rotatingText";

export default function TextHero() {
  const textContent =
    "A 501(c)(3) non-profit organization that develops the soft skills in tech interested youth through hands on application, such as our flagship hackathons.";

  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 max-w-screen-xl mx-auto">
      <h1 className="flex flex-row gap-4 text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-center lg:text-left ">
        <span className="text-violet-50">
          Hack
        </span>
        <RotatingText
          texts={['United', 'athons!', 'United', 'With Us']}
          mainClassName="px-2 bg-violet-800/90 text-violet-50 overflow-hidden justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </h1>

      <div className="w-full md:w-3/4 lg:w-2/3 ">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-center lg:text-left">
          {textContent}
        </p>
      </div>

      <div className=" md:w-3/4 lg:w-2/3 ">
        <ButtonHero />
      </div>
    </div>
  );
}
