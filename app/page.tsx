"use client"

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { Creepster } from "next/font/google";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <>
      <div className="w-screen min-h-screen bg-[#f6aa1cff]">
        <Parallax pages={1.3} style={{ top: "0", left: "0" }}>

          <ParallaxLayer
            offset={0}
            speed={0.7}
            style={{
              backgroundImage: "url(/spider.gif)",
              backgroundSize: "22%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left top",
              backgroundColor: "transparent",
              zIndex: 2,
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.7}
            style={{
              backgroundImage: "url(/bats.png)",
              backgroundSize: "28%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right top",
              backgroundColor: "transparent",
              zIndex: 1,
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={3}
            style={{
              backgroundImage: "url(/house.png)",
              backgroundSize: "18%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left bottom",
              backgroundColor: "transparent",
              zIndex: 1,
            }}
          />

          <ParallaxLayer offset={0} speed={2.5}>
            <div className="flex justify-center items-center h-screen">
              <p
                className={`text-md text-blood_red-500 drop-shadow-[0_0_15px_#f97447] ${creepster.className}`}
              >
                Welcome to my Spooky Portfolio
              </p>
            </div>
          </ParallaxLayer>


        </Parallax>
      </div>

      <div className="curtain">
        <div className="invert">
          <h2 className={creepster.className}>
            Beware... More Awaits 👀
          </h2>
        </div>
      </div>
    </>
  );
}
