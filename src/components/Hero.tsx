import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../../typing'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo:PageInfo
}

const Hero = ({pageInfo}: Props) => {
  const [text] = useTypewriter({
    words: [`Hello, This is ${pageInfo?.name}`, 'Next JS i\'m coming', '<HelloWord/>'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img src={urlFor(pageInfo.heroImage).url()} className='relative rounded-full h-32 w-32 mx-auto object-cover' />
      <div className='z-10'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Project</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero