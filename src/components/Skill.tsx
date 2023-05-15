import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from '../../typing'
import { urlFor } from '../../sanity'

type Props = {
    directionLeft?: boolean,
    item:Skill
}

const Skill = ({ directionLeft,item }: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                src={urlFor(item?.image).url()}
                className='rounded-full border border-gray-500 object-cover w-24 h-24
                md:h-28 md:w-28 xl:w-28 xl:h-28 filter group-hover:grayscalen transition
                duration-300 ease-in-out'
            />
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className='absolute group-hover:opacity-80 transition duration-300
                ease-in-out group-hover:bg-white w-24 h-24 md:h-28 md:w-28 xl:w-28 
                xl:h-28 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-0 group-hover:opacity-100'>{item?.progress}%</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill