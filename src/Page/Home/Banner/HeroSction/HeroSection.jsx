import React from 'react'
import Title from '../../../../Components/Title'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className='container mx-auto'>

            <div className="flex flex-col lg:flex-row items-center bg-[#F5F5F5] p-8 gap-5 lg:p-16 space-y-8 lg:space-y-0">
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-60 md:h-full flex justify-end lg:justify-end">
                    {/* Black-and-white background image */}
                    <div className="absolute inset-0 bg-cover bg-center grayscale rounded w-11/12 h:60 md:h-80" style={{ backgroundImage: 'url(https://i.ibb.co.com/Tmc8s8c/about-image.webp)' }}></div>

                    {/* Circular image */}
                    <div className="relative w-60 md:w-80 h-60 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src="https://i.ibb.co.com/djX35dD/about-us-image.webp"
                            alt="Foreground"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-3 text-left">
                    <Title name={'ABOUT US'}></Title>
                    <h1 className="text-3xl font-medium text-gray-800">
                        Quality Assurance Beyond Standards<br />Elevating Defense Excellence
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Welcome to Spartan Solutions, where quality meets innovation. We are dedicated to delivering lean and impactful solutions that contribute to our nation’s continuous improvement. Our core values prioritize excellence, efficiency, and meaningful impact, shaping solutions that stand the test of time.As we navigate towards the future, our objective is to guide the nation towards excellence and play a pivotal role in shaping a brighter tomorrow. Join us in our journey to redefine what is possible and build a better future for all.
                        Spartan Solutions: Crafting Excellence, Shaping the Future.</p>
                    <Link to="/" className="text-red-600 hover:underline font-semibold">Learn more →</Link>
                </div>
            </div>



            {/* // <div className='bg-[#F5F5F5]'>
        //     <div className='container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        //         <div>
        //             <div>
        //                 <img src="https://i.ibb.co.com/Tmc8s8c/about-image.webp" alt="" />
        //                 <img src="https://i.ibb.co.com/djX35dD/about-us-image.webp" alt="" />
        //             </div>
        //         </div>
        //         <div>
        //             <Title name={"ABOUT US"}></Title>
        //             <h1>Quality Assurance Beyond Standards Elevating Defense Excellence</h1>
        //         </div>
        //     </div>
        // </div> */}
        </div>
    )
}

export default HeroSection