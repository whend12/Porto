<<<<<<< HEAD
import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageAdd } from 'react-icons/bi'
import { Link } from 'react-scroll'


const Navbar = () => {
    //button scale if active to page

    return (
        <nav className='fixed bottom-9 md:bottom-12 w-full overflow-hidden z-50 bg-transparent'>
            <div className='container mx-auto'>
                <div className='w-full bg-gray-700 bg-opacity-10 h-[76px] backdrop-blur-2xl rounded-full max-w-[420px] mx-auto px-5 flex justify-between items-center text-2xl
                                 text-gray-100'>
                    <Link to='header'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <AiOutlineHome className='text-2xl' />
                    </Link>
                    <Link to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <AiOutlineUser className='text-2xl' />
                    </Link>
                    <Link to='project'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <BiBook className='text-2xl' />
                    </Link>

                    <Link to='contact'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <BiMessageAdd className='text-2xl' />
                    </Link>

                </div>
            </div>
        </nav>
    )
}

=======
import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageAdd } from 'react-icons/bi'
import { Link } from 'react-scroll'


const Navbar = () => {
    //button scale if active to page

    return (
        <nav className='fixed bottom-9 md:bottom-12 w-full overflow-hidden z-50 bg-transparent'>
            <div className='container mx-auto'>
                <div className='w-full bg-gray-700 bg-opacity-10 h-[76px] backdrop-blur-2xl rounded-full max-w-[420px] mx-auto px-5 flex justify-between items-center text-2xl
                                 text-gray-100'>
                    <Link to='header'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <AiOutlineHome className='text-2xl' />
                    </Link>
                    <Link to='about'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <AiOutlineUser className='text-2xl' />
                    </Link>
                    <Link to='project'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <BiBook className='text-2xl' />
                    </Link>

                    <Link to='contact'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        className='cursor-pointer  w-[60px] h-[60px] flex items-center justify-center hover:scale-125'
                    >
                        <BiMessageAdd className='text-2xl' />
                    </Link>

                </div>
            </div>
        </nav>
    )
}

>>>>>>> cbb5a711a7473c51f431478d9f0a01b66bc2f446
export default Navbar