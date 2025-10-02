"use client"

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import { Creepster } from "next/font/google";

const creepster = Creepster({
  subsets: ["latin"],
  weight: "400",
});

// Note: keyframe animations removed per user request

export default function Page() {
  const [resumeData, setResumeData] = useState<any>(null);

  useEffect(() => {
    fetch('/resumeData.json')
      .then(res => res.json())
      .then(data => setResumeData(data));
  }, []);

  // Small Reveal wrapper: observes when element enters viewport and animates in with staggered delay
  function Reveal({ children, index = 0, dir = 'right' }: { children: React.ReactNode; index?: number; dir?: 'right' | 'left' }) {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;
      const obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          if (e && e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(node);
      return () => obs.disconnect();
    }, []);

    const offset = dir === 'right' ? 40 : -40;
    const style: React.CSSProperties = {
      transform: visible ? 'translateX(0)' : `translateX(${offset}px)`,
      opacity: visible ? 1 : 0,
      transitionProperty: 'transform, opacity',
      transitionDuration: '600ms',
      transitionTimingFunction: 'cubic-bezier(.2,.9,.2,1)',
      transitionDelay: `${index * 120}ms`,
    };

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }

  if (!resumeData) return null;
  return (
    <>
      <div className="w-screen min-h-screen bg-[#f6aa1cff]">
        <Parallax pages={20} style={{ top: "0", left: "0" }}>

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
                color: "white",
                WebkitTextStroke: "5px white",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "difference",
              }}
            >
              Beware... More Awaits
            </h2>
          </ParallaxLayer>

          {/* PAGE 2: About */}
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#220901ff" }}>
            <div className="flex flex-col justify-center items-center h-screen px-8">
              <h2 className={`text-6xl text-[#f6aa1cff] mb-8 ${creepster.className}`}>About Me</h2>
              <p className="text-white text-xl max-w-3xl text-center">{resumeData.main.bio}</p>
            </div>
          </ParallaxLayer>

          {/* PAGE 3: Skills - Sticky Title */}
          <ParallaxLayer offset={3} speed={0.5} style={{ backgroundColor: "#f6aa1cff" }} />
          
          <ParallaxLayer 
            sticky={{ start: 3, end: 3.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#220901ff] ${creepster.className}`}>Skills</h2>
          </ParallaxLayer>
          
          <ParallaxLayer offset={3.3} speed={1.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="grid grid-cols-2 gap-6 max-w-3xl w-full">
              {resumeData.resume.skills.map((skill: any, i: number) => (
                <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="bg-[#220901ff] p-4 rounded hover:shadow-lg transition-all hover:scale-105">
                    <p className="text-[#f6aa1cff] text-lg mb-2 font-bold">{skill.name}</p>
                    <div className="w-full bg-[#621708ff] rounded h-3">
                      <div className="bg-[#bc3908ff] h-3 rounded transition-all duration-1000" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </ParallaxLayer>

          {/* PAGE 4: Education - Sticky Title */}
          <ParallaxLayer offset={4} speed={0.5} style={{ backgroundColor: "#220901ff" }} />
          
          <ParallaxLayer 
            sticky={{ start: 4, end: 4.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#f6aa1cff] ${creepster.className}`}>Education</h2>
          </ParallaxLayer>
          
          <ParallaxLayer offset={4.3} speed={1.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              {resumeData.resume.education.map((edu: any, i: number) => (
                <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="bg-[#f6aa1cff] p-6 rounded max-w-3xl hover:bg-[#bc3908ff] transition-all duration-300 hover:scale-105">
                    <h3 className={`text-3xl text-[#220901ff] ${creepster.className}`}>{edu.school}</h3>
                    <p className="text-[#220901ff] text-lg font-semibold">{edu.degree}</p>
                    <p className="text-[#621708ff]">{edu.graduated}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </ParallaxLayer>

          {/* PAGE 5: Work - Sticky Title */}
          <ParallaxLayer offset={5} speed={0.5} style={{ backgroundColor: "#f6aa1cff" }} />
          
          <ParallaxLayer 
            sticky={{ start: 5, end: 5.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#220901ff] ${creepster.className}`}>Work</h2>
          </ParallaxLayer>
          
          <ParallaxLayer offset={5.3} speed={1.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="space-y-4 max-w-3xl w-full">
              {resumeData.resume.work.map((job: any, i: number) => (
                <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="bg-[#220901ff] p-6 rounded hover:bg-[#941b0cff] transition-all duration-300 hover:scale-105">
                    <h3 className={`text-3xl text-[#f6aa1cff] ${creepster.className}`}>{job.company}</h3>
                    <p className="text-white text-lg font-semibold">{job.title}</p>
                    <p className="text-[#bc3908ff]">{job.years}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </ParallaxLayer>

          {/* PAGE 6: Projects - Sticky Title */}
          <ParallaxLayer offset={6} speed={0.5} style={{ backgroundColor: "#220901ff" }} />
          
          <ParallaxLayer 
            sticky={{ start: 6, end: 6.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#f6aa1cff] ${creepster.className}`}>Projects</h2>
          </ParallaxLayer>
          
          <ParallaxLayer offset={6.3} speed={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="grid grid-cols-2 gap-6 max-w-4xl w-[60vw]">
              {resumeData.portfolio.projects.slice(0, 4).map((project: any, i: number) => (
                <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                  <a href={project.url} target="_blank" className="bg-[#f6aa1cff] p-6 rounded hover:scale-105 transition-all duration-300 hover:bg-[#bc3908ff] hover:shadow-[0_0_30px_#941b0cff] min-h-[160px] flex flex-col justify-between">
                    <h3 className={`text-2xl text-[#220901ff] mb-2 ${creepster.className}`}>{project.title}</h3>
                    <p className="text-[#621708ff] leading-relaxed">{project.about}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </ParallaxLayer>

          {/* PAGE 7: More Projects - Sticky Title */}
          <ParallaxLayer offset={7} speed={0.5} style={{ backgroundColor: "#f6aa1cff" }} />
          
          <ParallaxLayer 
            sticky={{ start: 7, end: 7.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#220901ff] ${creepster.className}`}>More Projects</h2>
          </ParallaxLayer>
          
          <ParallaxLayer offset={7.3} speed={1.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="grid grid-cols-2 gap-6 max-w-4xl w-[60vw]">
              {resumeData.portfolio.projects.slice(4).map((project: any, i: number) => (
                <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                  <a href={project.url} target="_blank" className="bg-[#220901ff] p-6 rounded hover:scale-105 transition-all duration-300 hover:bg-[#621708ff] hover:shadow-[0_0_30px_#f6aa1cff] min-h-[160px] flex flex-col justify-between">
                    <h3 className={`text-2xl text-[#f6aa1cff] mb-2 ${creepster.className}`}>{project.title}</h3>
                    <p className="text-[#bc3908ff] leading-relaxed">{project.about}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </ParallaxLayer>

          {/* PAGE 8: Contact */}
          <ParallaxLayer offset={8} speed={0.5} style={{ backgroundColor: "#220901ff" }} />
          <ParallaxLayer 
            sticky={{ start: 8, end: 8.8 }} 
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', paddingTop: '5rem', paddingLeft: '3rem' }}
          >
            <h2 className={`text-6xl text-[#f6aa1cff] ${creepster.className}`}>Contact</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={8.3} speed={1.5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '3rem' }}>
            <div className="bg-[#f6aa1cff] p-8 rounded max-w-2xl hover:shadow-lg hover:scale-105 transition-all duration-500">
              <p className="text-[#220901ff] text-xl mb-4 font-semibold">
                <span className="text-[#941b0cff]">Email:</span> {resumeData.main.email}
              </p>
              <p className="text-[#220901ff] text-xl mb-4 font-semibold">
                <span className="text-[#941b0cff]">Phone:</span> {resumeData.main.phone}
              </p>
              <p className="text-[#220901ff] text-xl mb-6 font-semibold">
                <span className="text-[#941b0cff]">Location:</span> {resumeData.main.address.city}, {resumeData.main.address.state}
              </p>
                <div className="flex gap-4 justify-center">
                  {resumeData.main.social.map((social: any, i: number) => (
                    <Reveal key={i} index={i} dir={i % 2 === 0 ? 'right' : 'left'}>
                      <a href={social.url} target="_blank" className="text-[#220901ff] hover:text-[#621708ff] text-3xl hover:scale-125 transition-all duration-300">
                        <i className={social.className}></i>
                      </a>
                    </Reveal>
                  ))}
                </div>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
}
