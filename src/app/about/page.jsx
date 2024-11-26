"use client";
import Camera from "@/components/camera";
import Lens from "@/components/lens";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4  sm:p-8 md:p-12 lg:p-20 xl:p-48 xl:py-12 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className=" flex flex-col gap-12 m-auto justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.unsplash.com/photo-1512813498716-3e640fed3f39?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={112} //było 112
              height={112}
              className=" flex bg-red-100 w-28 h-28 lg:w-48 lg:h-48 rounded-full object-cover justify-center " //było 28
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIO</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I'm Liza, a photography enthusiast capturing the magical moments
              of everyday life. My work blends creativity and technique,
              resulting in unique shots filled with emotion and beauty.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Below, you'll find my skills and professional experience.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-center">
              <svg
                width="285" //185
                height="163" //77
                viewBox="0 0 819 163" //0 0 370 114
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 2C29 13.5555 25.187 23.0779 22 34.0556C17.0703 51.0355 13.8093 67.7998 6.99998 84.2222C2.18876 95.8257 -1.31394 107.138 7.55553 117.889C9.56867 120.329 14.7945 126.863 18.4444 123.889C23.5223 119.751 26.9708 113.393 31.4444 108.611C35.3105 104.478 40.2924 100.191 43.4444 95.5556C48.2773 88.4484 56 80.427 56 71.5556C56 67.2365 55.9215 76.4318 55.8333 77.1667C55.0917 83.347 53.4558 90.0307 52 96.1111C51.1206 99.7837 50.9594 116 47 116 M90 64C110.052 64 130.51 58.6005 150 54.4445C158.564 52.6184 136.672 69.235 136.556 69.3333C115.22 87.3438 92.2152 101.77 69.1667 117.389C62.8675 121.657 57.6686 125.188 66.5556 128.222C74.7991 131.037 84.5285 131.655 93.1111 130.278C101.565 128.921 103.91 126.09 109 121 M162 91C157.267 91.2629 154.333 95.7108 152.667 99.7778C145.522 117.212 159.371 126.607 175.056 129C203.428 133.328 227.462 113.385 232.056 85.3889C234.267 71.9108 229.38 54.493 212.278 57.5C199.131 59.8115 187.897 71.1518 183.333 83.4444C177.402 99.4219 231.343 80.4598 235.889 78.6667C239.914 77.0788 246.511 72.0014 246.556 79.2222C246.609 87.8517 244.568 96.2704 242.889 104.667C242.213 108.044 240.072 114 245 114 M354 49C354 64.7868 352.958 79.8961 349.278 95.3333C346.347 107.628 342.936 119.893 338.778 131.833C335.761 140.496 335.184 139.509 331 133 M333 38C349.499 38 367.426 40.728 374.778 58.4444C385.192 83.5404 362.921 111.415 349.889 130.667C343.901 139.513 337.396 154.638 327 159.333C320.181 162.413 313.68 161.087 307 159 M396 94C390.963 96.3706 392.779 102.11 393.333 107.333C393.917 112.829 398.184 145.841 410.167 141.111C421.956 136.457 432.652 115.72 435.111 104.222C438.088 90.303 430.912 80.4698 417.222 78.2222C406.61 76.4799 398.156 90.0239 394.333 98.1111C389.396 108.556 400.551 111.519 408.722 111.833C414.091 112.04 418.378 105.059 420 111.222C421.636 117.44 426.511 122.043 428 128 M443 107C445.652 108.179 444.881 113.004 446.611 115C447.359 115.863 453.298 107.032 455 105.778C461.951 100.656 462.033 110.033 465 113 M514 95C518.515 97.8217 508.213 106.102 510.889 110.667C515.903 119.221 527.394 123.498 536.778 123.944C544.623 124.318 549.462 130.135 557 130.889C561.63 131.352 565.226 131.43 564.778 125.833C564.511 122.505 563.438 120.018 560.667 118C558.714 116.578 550.61 111.309 548 113.222C543.915 116.218 554.388 123.987 556.556 124.778C562.567 126.971 564.786 122.044 569.556 120C571.924 118.985 575.477 125.037 577.111 126.222C583.399 130.781 590.936 130 598.278 130C603.284 130 608.225 130.149 613.222 130.556C619.196 131.042 630.981 134.439 636.333 130.222C639.98 127.349 642.687 124.672 647.333 122.444C655.483 118.537 666.42 115.76 672.5 108.667C673.209 107.839 674.636 106.01 673 105.222C672.683 105.069 671.625 105.019 671.944 105.167C678.723 108.295 686.168 113.47 689.944 120.056C693.641 126.5 693.351 133.506 686.444 136.889C678.823 140.622 671.732 137.843 674.111 127.778C675.796 120.651 683.341 114.441 687.944 109.5C697.503 99.2407 707.109 89.0198 716.444 78.5556C717.1 77.8209 740.016 51.7302 737 50.2222C733.649 48.5467 732.199 78.1411 732.222 79.1111C732.589 94.715 733.186 115.853 745.111 127.778C748.35 131.016 745.169 104.272 755.222 117.167C762.302 126.248 765.049 137.323 769.333 147.778C772.987 156.692 781.125 139.201 783.222 135.556C788.04 127.182 792.35 118.722 798.667 111.333C801.508 108.01 807.79 97.4726 811.5 104.111C812.016 105.034 813.661 110.707 814.556 108.278C815.447 105.859 816.045 103.388 817 101"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Sony Systems
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nikon Systems
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Canon Systems
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe Photoshop
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CMS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe Ilustrator
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Adobe Premiere
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Lightroom
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48" //p-48 było
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior Photography Specialist
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Responsible for overseeing high-quality photography
                    projects, including product shoots, editorial content, and
                    client campaigns.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-white text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Meridax
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-red-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-red-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Creative Imaging Director
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Leads the creative direction for visual projects,
                    collaborating with marketing and design teams to develop
                    compelling imagery. Oversees the entire imaging process,
                    from concept development to final production.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-white text-sm font-semibold">
                    2014 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    PhotoJoker
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Provides professional photography services for a variety of
                    clients, including events, portraits, and commercial shoots.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-white text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full  bg-red-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}

        <div className="sticky  hidden lg:block w-1/3 top-[0px] left-[5%] z-30 xl:w-1/2 ">
          <div className="relative w-full h-full top-[60px]">
            <Camera/>
            <div className="absolute top-[41.3%] left-[38.1%] flex items-center justify-center lg:block xl:w-1/2">
              <Lens scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
