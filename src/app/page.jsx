"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-300vh" }} //było -200
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row lg:gap-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-8">
        {/* IMAGE CONTAINER */}
        <div className="  h-1/2 lg:h-full lg:w-1/2  relative overflow-hidden ">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="object-contain pt-12 "
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center xl:pr-8">
          {/* TITLE */}
          <h1 className="text-2xl md:text-6xl font-bold">
            Photography for websites,
            <br />
            E-commerce stores and mobile applications.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            As a freelance photographer, he takes professional photographs,
            combining creativity and functionality to provide customized
            solutions for your business.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
