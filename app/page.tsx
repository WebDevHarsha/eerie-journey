"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

export default function page() {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p className='text-3xl'>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
    </Parallax>
  )
}
