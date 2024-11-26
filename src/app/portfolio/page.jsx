"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-zinc-700 to-amber-700",
    title: "Paris project",
    desc: `"Paris Project" is a photographic journey through the heart of Paris, capturing its hidden corners, vibrant streets, and the city's unique atmosphere. This project blends architecture, art, and everyday moments to create a unique portrait of the City of Love.`,
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://takzen.pl",
  },
  {
    id: 2,
    color: "from-amber-700 to-violet-700",
    title: "Streetphotography",
    desc: "StreetPhotography is a collection of authentic moments captured on the streets, where everyday life turns into art. This project documents spontaneous interactions, emotions, and the dynamic pulse of urban life, creating a vivid portrait of the modern street.",
    img: "https://images.unsplash.com/photo-1601639380477-fee6528edd4f?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://takzen.pl",
  },
  {
    id: 3,
    color: "from-violet-700 to-amber-700",
    title: "Copenhagen",
    desc: `"Copenhagen Project" is a photographic narrative of Denmark's capital, capturing its unique charm and sustainable pace of life. This project combines modern architecture, picturesque canals, and everyday scenes, creating a portrait of a city that harmoniously blends tradition with modernity.`,
    img: "https://images.unsplash.com/photo-1669065372971-b45ccc3edbfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://tazken.pl",
  },
  {
    id: 4,
    color: "from-amber-700 to-zinc-700",
    title: "Beautiful earth",
    desc: `Beautiful Earth is a tribute to the breathtaking beauty of our planet, showcasing its diverse landscapes and incredible wildlife. This project celebrates the majesty of nature, from towering mountains to serene oceans, emphasizing the fragility and value of our world.`,
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://takzen.pl",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-zinc-900 to-amber-500 " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-full">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className=" text-4xl lg:text-8xl px-8">
          What photography project are you most excited about right now?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300" //0 0 300 300
            className=" p-6 w-64 h-64 md:w-[400px] md:h-[400px] "
            // className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Photographer and photo image creator
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            //czarne koło
            className=" z-40 w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
          {/* <Image
            src="/shutter-camera-512.png"
            alt=""
            width={612}
            height={612}
            layout="fixed"
            className=" absolute top-0 left-0 right-0 bottom-0 m-auto   text-white rounded-full flex items-center justify-center z--0"
          />        */}
              <motion.svg
              className="  w-64 h-64 md:w-[400px] md:h-[400px] absolute top-0 left-0 right-0 bottom-0 m-auto   text-white rounded-full flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                  viewBox="0 0 28.3 28.3"

                >
                  <path d="M8.495,3.628c0,0-3.556,1.322-5.656,6.294l11.585-2.19L8.495,3.628z"/>
                  <path d="M2.664,10.631c0,0-1.568,3.455,0.481,8.448l6.612-9.763L2.664,10.631z"/>
                  <path d="M3.588,19.571c0,0,1.322,3.556,6.294,5.656L7.693,13.64L3.588,19.571z"/>
                  <path d="M10.591,25.401c0,0,3.455,1.567,8.448-0.481l-9.763-6.61L10.591,25.401z"/>
                  <path d="M19.722,24.629c0,0,3.557-1.322,5.656-6.296l-11.586,2.189L19.722,24.629z"/>
                  <path d="M25.071,9.177l-6.61,9.763l7.093-1.316C25.554,17.625,27.12,14.17,25.071,9.177z"/>
                  <path d="M24.628,8.685c0,0-1.322-3.556-6.295-5.655l2.189,11.585L24.628,8.685z"/>
                  <path d="M17.624,2.855c0,0-3.453-1.568-8.447,0.482l9.764,6.61L17.624,2.855z"/>
                  <path d="M14.151,0C6.336,0,0,6.336,0,14.15C0,21.963,6.335,28.3,14.151,28.3
			c7.813,0,14.149-6.338,14.149-14.15C28.301,6.336,21.965,0,14.151,0z M14.151,27.206c-7.199,0-13.057-5.857-13.057-13.056
			S6.952,1.094,14.151,1.094c7.197,0,13.055,5.857,13.055,13.056C27.206,21.349,21.348,27.206,14.151,27.206z"/>
                </motion.svg>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
