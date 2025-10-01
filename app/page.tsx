"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

export default function page() {
  return (
  <div className='w-screen min-h-screen bg-[#f6aa1cff]' >
      <Parallax pages={2}  style={{ top: '0', left: '0'}} >
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            backgroundImage: 'url(/spider.gif)',
            backgroundSize: '22%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
            backgroundColor: 'transparent',
            position: 'relative',
            zIndex: 2,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            backgroundImage: 'url(/bats.png)',
            backgroundSize: '28%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            backgroundColor: 'transparent',
            zIndex: 1,
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={3}
          style={{
            backgroundImage: 'url(/house.png)',
            backgroundSize: '18%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left bottom',
            backgroundColor: 'transparent',
            zIndex: 1,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.5}
          // style={{ position: 'relative', zIndex: 10 }}
        >
          <div className='flex justify-center items-center h-screen'>
            <p className='text-3xl'>Welcome to my Portfolio</p>
          </div>
        </ParallaxLayer>


        
      </Parallax>
    </div>
  )
}
