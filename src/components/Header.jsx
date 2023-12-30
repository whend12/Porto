<<<<<<< HEAD
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import when from '../assets/when.png'


const Header = () => {
    return (
        <section className=' bg-slate-800 ' id='header'>
            <div className='mx-4 text-gray-100'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:h-64'>
                    <div className='flex flex-col md:flex-row md:items-center mt-10 md:mt-5'>
                        <img src={when} alt='when' className='w-80 h-80 md:w-52 md:h-52 sm:h-35 sm:w-35 rounded-3xl md:rounded-full mb-5 md:mb-0' />
                        <div className='font-poppins ml-0 md:ml-10 py-5'>
                            <p className='block'>Hello, I'm</p>
                            <h2 className='block text-xl lg:text-4xl'>Wendy Gardiel</h2>
                            <p className='text-sm opacity-70 mt-2'>Web Developer</p>
                            <div className='mt-3 md:mt-5 space-x-6 flex justify-start'>
                                <a href='https://www.linkedin.com/in/wendy-gardiel/' target='_blank' rel='noreferrer'><AiFillLinkedin className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                                <a href='https://www.github.com/whend12' target='_blank' rel='noreferrer'><AiFillGithub className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                                <a href='https://www.instagram.com/whennn0' target='_blank' rel='noreferrer'><AiFillInstagram className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-5 '>
                        <div className='lg:block'>
                            <p className='block pt-5 text-center md:text-left font-bold'>Education</p>
                            <ul>
                                <li className='text-lg text-center md:text-left'>President University</li>
                                <p className='text-sm opacity-70 text-center md:text-left'>Information System</p>
                                <p className='text-sm opacity-70 text-center md:text-left'>2021 - Now</p>
                                <li className='text-lg text-center md:text-left mt-5 md:mt-6'>SMKN 1 CIKARANG UTARA</li>
                                <p className='text-sm opacity-70 text-center md:text-left'>Elektronika Industri</p>
                                <p className='text-sm opacity-70 text-center md:text-left'>2017 - 2020</p>
                            </ul>
                        </div>
                        <div className='lg:block'>
                            <p className='block pt-5 text-center md:text-left mt-5 md:mt-0 font-bold'>ACTIVITIES & ORGANIZATIONS</p>
                            <ul className='mt-2'>
                                <li className='text-lg text-center md:text-left'>Renstoration President University</li>
                                <p className='text-sm opacity-70 font-italic text-center md:text-left'>Sie. Logistic</p>
                                <p className='text-sm opacity-70 text-center md:text-left'> 2022 </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill mt-30 md:mt-15' >
                <h1 className='text-center text-gray-50 mt-10 md:mt-5 text-semibold font-poppins'>Familiar with</h1>
                <div className='image-logo flex justify-center gap-6'>
                    <img src='https://img.icons8.com/color/48/000000/html-5--v1.png' alt='html' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/css3.png' alt='css' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/javascript--v1.png' alt='javascript' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='nodejs' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='mongodb' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/git.png' alt='git' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/figma--v2.png' alt='figma' className='mt-3' />

                </div>
            </div>

        </section>
    )
}

=======
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import when from '../assets/when.png'


const Header = () => {
    return (
        <section className=' bg-slate-800 ' id='header'>
            <div className='mx-4 text-gray-100'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:h-64'>
                    <div className='flex flex-col md:flex-row md:items-center mt-10 md:mt-5'>
                        <img src={when} alt='when' className='w-80 h-80 md:w-52 md:h-52 sm:h-35 sm:w-35 rounded-3xl md:rounded-full mb-5 md:mb-0' />
                        <div className='font-poppins ml-0 md:ml-10 py-5'>
                            <p className='block'>Hello, I'm</p>
                            <h2 className='block text-xl lg:text-4xl'>Wendy Gardiel</h2>
                            <p className='text-sm opacity-70 mt-2'>Web Developer</p>
                            <div className='mt-3 md:mt-5 space-x-6 flex justify-start'>
                                <a href='https://www.linkedin.com/in/wendy-gardiel/' target='_blank' rel='noreferrer'><AiFillLinkedin className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                                <a href='https://www.github.com/whend12' target='_blank' rel='noreferrer'><AiFillGithub className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                                <a href='https://www.instagram.com/whennn0' target='_blank' rel='noreferrer'><AiFillInstagram className='text-2xl hover:text-gray-600 hover:scale-125' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-5 '>
                        <div className='lg:block'>
                            <p className='block pt-5 text-center md:text-left font-bold'>Education</p>
                            <ul>
                                <li className='text-lg text-center md:text-left'>President University</li>
                                <p className='text-sm opacity-70 text-center md:text-left'>Information System</p>
                                <p className='text-sm opacity-70 text-center md:text-left'>2021 - Now</p>
                                <li className='text-lg text-center md:text-left mt-5 md:mt-6'>SMKN 1 CIKARANG UTARA</li>
                                <p className='text-sm opacity-70 text-center md:text-left'>Elektronika Industri</p>
                                <p className='text-sm opacity-70 text-center md:text-left'>2017 - 2020</p>
                            </ul>
                        </div>
                        <div className='lg:block'>
                            <p className='block pt-5 text-center md:text-left mt-5 md:mt-0 font-bold'>ACTIVITIES & ORGANIZATIONS</p>
                            <ul className='mt-2'>
                                <li className='text-lg text-center md:text-left'>Renstoration President University</li>
                                <p className='text-sm opacity-70 font-italic text-center md:text-left'>Sie. Logistic</p>
                                <p className='text-sm opacity-70 text-center md:text-left'> 2022 </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill mt-30 md:mt-15' >
                <h1 className='text-center text-gray-50 mt-10 md:mt-5 text-semibold font-poppins'>Familiar with</h1>
                <div className='image-logo flex justify-center gap-6'>
                    <img src='https://img.icons8.com/color/48/000000/html-5--v1.png' alt='html' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/css3.png' alt='css' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/javascript--v1.png' alt='javascript' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/react-native.png' alt='react' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='nodejs' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/mongodb.png' alt='mongodb' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/git.png' alt='git' className='mt-3' />
                    <img src='https://img.icons8.com/color/48/000000/figma--v2.png' alt='figma' className='mt-3' />

                </div>
            </div>

        </section>
    )
}

>>>>>>> cbb5a711a7473c51f431478d9f0a01b66bc2f446
export default Header