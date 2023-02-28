import React from 'react'
import { fadeIn } from '../assets/Effect.js'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import meremove from '../assets/meremove.png'
import { Link } from 'react-scroll'
import CV_Wendy_Gardiel from '../assets/CV_Wendy_Gardiel.pdf'


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <section className='section' id='about' ref={ref} >
            <div className='container mx-auto'>
                <div className='container ml-5 mx-auto flex flex-col md:flex-row gap-y-10 md:gap-x-20 items-center h-screen'>
                    {/* img */}
                    <div className="flex-1 w-full md:w-1/2">
                        <motion.img
                            src={meremove}
                            alt="about"
                            className="w-full h-auto object-contain"
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} />
                    </div>
                    {/* text */}
                    <div className='flex-1 mt-5 md:mt-0 md:ml-5 mr-4 text-gray-100'>
                        <h2 className='h2 font-poppins font-semibold'>
                            About Me.
                        </h2>
                        <h3 className='h4 mb-4 '>
                            I'm a Undergraduate from President University majoring in Information System.
                        </h3>
                        <p className='mb-6 mr-3'>
                            I have a strong initiative and ambition to create creative and effective solutions for
                            problems in web development. I am proficient in programming languages such as JavaScript
                            and various CMS to build responsive and interactive websites.
                        </p>
                        {/* stats */}
                        <div className='flex gap-x-6 items-center pt-5 md:pt-2  '>
                            <Link to='contact'
                                className='btn btn-lg text-white font-bold py-3 px-4 justify-center items-center cursor-pointer'
                                activeClass='active'
                                spy={true}
                                smooth={true}>
                                Contact Me
                            </Link>
                            <a href={CV_Wendy_Gardiel} download className='text-gradient btn-link'>Download CV</a>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default About
