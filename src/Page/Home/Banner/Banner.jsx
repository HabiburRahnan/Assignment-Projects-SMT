import React from 'react'
import Navbar from '../../../Sheard/Navbar/Navbar'

function Banner() {
    return (
      
         <div
            className="bg-[url('https://i.ibb.co.com/1ny0v5R/hero-banner-image.webp')] bg-cover  object-cover bg-black bg-opacity-50   h-screen">
            <Navbar></Navbar>

            <div className='container mx-auto mt-72 px-4'>
                <div className='text-white'>
                    <h1 className='text-3xl  font-semibold '>Innovation at the Helm </h1>
                    <p className='text-xl py-4'>Industry Leaders in Defense Contracting Capabilities</p>
                    <button className='my-2 p-2 text-xl font-serif bg-[#FF3529] rounded text-white hover:text-white hover:bg-[#FF3529] border-none flex justify-center items-center'>Get Started Today</button>
                </div>
            </div>

        </div>

    )
}

export default Banner