import React, { useState } from 'react'
import { fadeIn } from '../assets/Effect.js'
import { motion } from 'framer-motion'


const Contacts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '6281296262351'; // ganti dengan nomor WhatsApp tujuan
    const messageText = `Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`; // format pesan
    window.open(`https://wa.me/${phoneNumber}?text=${messageText}`, '_blank'); // membuka link WhatsApp di tab baru
  };

  return (
    <section>
      <div className='py-16 lg:section ml-5' id='contact'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            {/* Text */}
            <motion.div
             variants={fadeIn('right', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false , amount: 0.3}}
             className='flex-1 justify-start items-center '>
              <div>
                <h4 className='text-xl uppercase text-gray-100 font-medium mb-2 tracking-wide'>Get in touch!</h4>
                <h2 className='text-[45px] lg:text-[85px] uppercase leading-none mb-12 text-gray-300 '>
                  Let's work <br /> together!</h2>

              </div>
            </motion.div>
            {/* form */}
            <form className='flex-1 border rounded-2xl flex flex-col gap-y-2 pb-15 p-4 items-start mr-3 text-gray-100'>
              <input
                className='bg-transparent border-b py-3 placeholder:opacity-50 outline-none w-full placeholder:text-white focus:border-gray-500 transition-all'
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='bg-transparent border-b py-3 placeholder:opacity-50 outline-none w-full placeholder:text-white focus:border-gray-500 transition-all'
                type='text'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className='bg-transparent border-b py-12 placeholder:opacity-50 outline-none w-full placeholder:text-white focus:border-gray-50 transition-all resize-none mb-12'
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className='btn btn-lg' onClick={handleSubmit}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts