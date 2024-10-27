import React from 'react'
import Title from '../../../Components/Title'
import { IoIosCheckmarkCircle } from 'react-icons/io'

function Benefits() {
    return (
        <div className='container mx-auto p-auto md:p-5'>
            <div className="flex flex-col lg:flex-row items-center justify-center  bg-gray-100 p-6">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src="https://i.ibb.co.com/vx3x19z/benefits-image.webp"
                        alt="Navy dock scene"
                        className="w-full  object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                    <Title name="BENEFITS"></Title>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Spartan Solutions: Elevating Government Contracts With Decades of Expertise
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Unlock the full potential of government contracting with Spartan Solutions. With over 30 years of cumulative experience in the government arena, our leadership team brings unparalleled expertise in Technical Program Management, Logistics Management, Quality Assurance Management, and Technical Design/Assembly Management.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> Cumulative Expertise
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> End-to-End Solutions
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> Quality Assurance
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> Efficient Project Execution
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> Client-Centric Approach
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2"><IoIosCheckmarkCircle />
                            </span> Legacy of Expertise
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits