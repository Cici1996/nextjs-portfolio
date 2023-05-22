import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../../typing'
import { urlFor } from '../../sanity'

type Props = {
    item: Experience
}

const WorkExperienceCard = ({ item }: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292922] p-10 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[110px] xl:h-[110px] object-cover object-center'
                src={urlFor(item?.companyImage).url()} />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{item?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{item?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {(item?.technologies ?? []).map(x => (
                        <img key={x._id} className='h-10 w-10 rounded-full' src={urlFor(x.image).url()} alt="" />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(item.dateStarted).toDateString()} - {item.isCurrentWorkingHere ? 'Present' : new Date(item?.dateEnded).toDateString()}</p>
                <ul className='list-disc space-y-4 ml-5 text-sm'>
                    {item.points.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default WorkExperienceCard