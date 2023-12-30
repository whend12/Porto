<<<<<<< HEAD
import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiFillProject } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbartwo = () => {
    //button scale if active to page

    const [activeNav, setActiveNav] = useState('#')
    

    return (
        <nav className='fixed inset-x-0 bottom-2 w-full overflow-hidden z-50  '>
            
           <div className='container mx-auto'>
            <div className='w-full bg-gray-700 h-20 backdrop-blur-2xl rounded-full max-w-sm mx-auto px-4 flex justify-between items-center text-2xl
            text-white-100'>
                <Link to='header'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <AiOutlineHome className='text-2xl' />
                </Link>
                <Link to='about'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <AiOutlineUser className='text-2xl' />
                </Link>
                <Link to='project'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <RiServiceLine className='text-2xl' />
                </Link>
                <Link to='experince'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <BiBook className='text-2xl' />
                </Link>
                <Link to='contact'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <BiMessageSquareDetail className='text-2xl' />
                </Link>

            </div>
           </div>
        </nav>
    )
}

=======
import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiFillProject } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbartwo = () => {
    //button scale if active to page

    const [activeNav, setActiveNav] = useState('#')
    

    return (
        <nav className='fixed inset-x-0 bottom-2 w-full overflow-hidden z-50  '>
            
           <div className='container mx-auto'>
            <div className='w-full bg-gray-700 h-20 backdrop-blur-2xl rounded-full max-w-sm mx-auto px-4 flex justify-between items-center text-2xl
            text-white-100'>
                <Link to='header'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <AiOutlineHome className='text-2xl' />
                </Link>
                <Link to='about'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <AiOutlineUser className='text-2xl' />
                </Link>
                <Link to='project'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <RiServiceLine className='text-2xl' />
                </Link>
                <Link to='experince'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <BiBook className='text-2xl' />
                </Link>
                <Link to='contact'
                    className='cursor-pointer w-16 flex items-center justify-center hover:scale-120'
                >
                    <BiMessageSquareDetail className='text-2xl' />
                </Link>

            </div>
           </div>
        </nav>
    )
}

>>>>>>> cbb5a711a7473c51f431478d9f0a01b66bc2f446
export default Navbartwo