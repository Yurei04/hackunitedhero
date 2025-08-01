"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FaultyTerminal from "@/components/faultyTerminal";
import LogoHero from "@/components/heroComp/logo";
import TextHero from "@/components/heroComp/text";

export default function HeroPage() {

  const messages = [
    "Welcome to our world.",
    "We build for the future.",
    "Join the journey.",
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    let current = 0;

    const nextStep = () => {
      if (current <= messages.length) {
        setStep(current);
        current++;
        setTimeout(nextStep, 2500); 
      }
    };

    nextStep();

    return () => clearTimeout(); 
  }, []);

  return (
    <div className="w-full h-screen p-12 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <FaultyTerminal
          scale={4}
          gridMul={[2, 1]}
          digitSize={2}
          timeScale={1}
          pause={false}
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

      <AnimatePresence mode="wait">
        {step < messages.length && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="z-10 text-white text-3xl md:text-5xl text-center font-semibold px-4"
          >
            {messages[step]}
          </motion.div>
        )}
      </AnimatePresence>

      {step === messages.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col lg:flex-row md:flex-col sm:flex-col p-16 items-center justify-center z-50"
        >
          <TextHero />
          <LogoHero />
        </motion.div>
      )}
    </div>
  );
}
