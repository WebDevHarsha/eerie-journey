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
        <Parallax pages={10} style={{ top: "0", left: "0" }}>

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
            speed={0.7}
            style={{
              backgroundImage: "url(/witch.png)",
              backgroundSize: "18%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
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

          <ParallaxLayer offset={0} speed={2.5} style={{ zIndex: 3 }}>
            <div className="flex justify-center items-center h-screen">
              <p
                className={`text-md text-blood_red-500 drop-shadow-[0_0_15px_#f97447] ${creepster.className}`}
              >
                Welcome to my Spooky Portfolio
              </p>
            </div>
          </ParallaxLayer>

          {/* Curtain Effect - Split background that reveals on scroll */}
          <ParallaxLayer
            offset={0.99}
            speed={0.5}
            factor={2}
            style={{
              background: "linear-gradient(to bottom, #220901ff 50%, #f6aa1cff 50%)",
              zIndex: 4,
            }}
          />

          {/* Curtain Effect - Sticky text with blend mode */}
          <ParallaxLayer
            offset={1}
            speed={0.005}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            <h2
              className={creepster.className}
              style={{
                fontSize: "60px",
                color: "#f6aa1cff",
                WebkitTextStroke: "5px #f6aa1cff",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "difference",
              }}
            >
              Beware... More Awaits
            </h2>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
}
