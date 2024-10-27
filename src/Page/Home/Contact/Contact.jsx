import React from 'react'

function Contact() {
    return (
        <div>
            <div className=' p-auto rounded-md shadow-xl overflow-hidden relative'>
                <img className='absolute inset-0 h-full w-full object-fill bg-cover' src="https://i.ibb.co.com/zGvCdC0/cta-banner.webp" alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-75'></div>
                <div className='container mx-auto flex h-full items-center justify-center relative py-2'>
                    <div className="w-full text-white p-10 text-center text-2xl font-semibold my-4">
                        <h2 className="">
                            FORGE STRENGTH IN SERVICE, ELEVATE YOUR MISSION.
                        </h2>
                        <h2 className="my-4">
                            CONTACT US TODAY FOR SUPERIOR DEPARTMENT OF DEFENSE SERVICES.
                        </h2>

                        <button className="btn btn-outline text-white outline-white hover:bg-red-500">
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>

        </div>)
}

export default Contact