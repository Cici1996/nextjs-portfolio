import { motion } from 'framer-motion';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Social } from '../../typing';

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {

  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        {(socials ?? []).map((item) => (
          <SocialIcon key={item._id} url={item.url} fgColor='gray' bgColor='transparent' />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Tounch</p>
      </motion.div>
    </header>
  )
}

export default Header;