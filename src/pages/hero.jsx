"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FaultyTerminal from "@/components/faultyTerminal";
import LogoHero from "@/components/heroComp/logo";
import TextHero from "@/components/heroComp/text";
import Image from 'next/image';
import DarkVeil from '@/components/darkVeil';
import NavBar from '@/components/heroComp/navbar';
import TextType from '@/components/textType';
import SpotlightCard from '@/components/spotLightCard';
import TargetCursor from '@/components/targetCursor';
import FlowingMenu from '@/components/flowingMenu';
import Folder from '@/components/folder';
import Carousel from '@/components/carosel';

export default function HeroPage() {
  const messages = [
    "Empowering Innovators",
    "Join Our Hackathons",
    "Learn and Create!",
  ];

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  ];

  const [step, setStep] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    let current = 0;

    const advance = () => {
      if (current < messages.length) {
        setStep(current);
        current++;
        setTimeout(advance, 1500); 
      } else {
        setShowMessage(false);

        setTimeout(() => {
          setShowFinal(true);
        }, 1000);
      }
    };

    advance();
  }, []);

  return (
    <div className="w-full min-h-screen px-16 flex flex-col items-center justify-center relative overflow-hidden">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="pointer-events-none fixed inset-0 z-[-1]">
         <DarkVeil />
      </div>

      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            key={`msg-${step}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.75 }}
            className="z-10 text-white text-3xl md:text-5xl text-center font-semibold px-4"
          >
            <div className="flex flex-row gap-4 items-center justify-center">
              <div className="relative z-10 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] mx-auto rounded-3xl">
                <Image
                  height={400}
                  width={400}
                  src="/images/HackUnited2NoBkg.png"
                  alt="HackUnitedLogo"
                  className="rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h1>{messages[step]}</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showFinal && (
          <motion.div
            key="final-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col p-16 items-center justify-center gap-4 z-50"
          >
              <div className="flex items-center justify-center p-4 mb-2">
                <NavBar />
              </div>
              <div className="flex flex-col lg:flex-row sm:flex-col items-center justify-center ">
                <TextHero />

                <div className="flex flex-col items-center gap-4">
                  <LogoHero />
                  <Carousel
                    baseWidth={300}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                  />
                </div>
              </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
