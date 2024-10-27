import React from 'react'

function BottomSection() {
    return (
        <div className='container mx-auto grid md:flex items-center gap-5 my-5'>
            <div className='lg:h-60 md:w-1/2 p-auto rounded-md shadow-xl overflow-hidden relative '>
                <img className='absolute inset-0 h-full w-full object-cover ' src="https://i.ibb.co.com/LxS3Qbw/operation.webp" alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-75'></div>
                <div className='flex h-full items-center justify-center relative py-2 '>
                    <div className="w-full text-white p-10 ">
                        <h2 className="text-2xl font-bold mb-4">
                            Aligning <span className="text-red-500">operations</span> with your
                            requirements
                        </h2>
                        <p className="text-xs mb-6">
                            As a defense and government contractor, our expertise speaks for
                            itself. With a proven track record in the industry, we navigate the
                            complexities of government projects with precision and
                            effectiveness. Our seasoned team, well-versed in defense
                            protocols and government regulations, ensures that every aspect
                            of our operations aligns seamlessly with the unique requirements
                            of our clients.
                        </p>
                    </div>
                </div>

            </div>
            <div className='lg:h-60 md:w-1/2 p-auto rounded-md shadow-xl overflow-hidden relative'>
                <img className='absolute inset-0 h-full w-full object-cover' src="https://i.ibb.co.com/S6rVYCJ/empower-commitment.webp" alt="" />
                <div className='absolute inset-0 bg-black bg-opacity-75'></div>
                <div className='flex h-full items-center justify-center relative py-2'>
                    <div className="w-full text-white p-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Standing <span className="text-red-500">strong</span> with our
                            troops
                        </h2>
                        <p className="text-xs mb-6">
                            At Spartan Solutions, supporting our troops is not just a
                            commitment; it's a core principle that underscores every facet of
                            our defense contracting services. Recognizing the sacrifices and
                            dedication of our servicemen and women, we take immense pride
                            in providing unwavering support.
                        </p>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BottomSection


