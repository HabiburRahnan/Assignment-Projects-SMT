import React from 'react'
import Title from '../../../Components/Title'
import BottomSection from './BottomSection'

function OthrBenefits() {
    return (
        <div>
            <div className='container mx-auto p-auto py-10'>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 bg-gray-100 mx-2">

                    <div className=" flex flex-col md:w-2/3 items-start justify-center bg-gray-100 p-6">
                        {/* Section Title */}
                        <Title name="OTHER BENEFITS"></Title>
                        {/* Section Subtitle */}
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                            Holistic Solutions for Mission Success
                        </h1>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            {/* Benefit 1 */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovative Integration</h3>
                                <p className="text-gray-700 text-sm">
                                    Spartan Solutions brings together innovation, leveraging cutting-edge approaches to address the unique challenges faced by government agencies.
                                </p>
                            </div>

                            {/* Benefit 2 */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Strategic Operations Management</h3>
                                <p className="text-gray-700 text-sm">
                                    From securing digital assets to optimizing supply chains, our expertise lies in managing complex projects with a strategic focus on mission success.
                                </p>
                            </div>

                            {/* Benefit 3 */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Trusted Partnership</h3>
                                <p className="text-gray-700 text-sm">
                                    As your dedicated partner, Spartan Solutions is committed to the success of your operations, ensuring a collaborative journey towards new heights of achievement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2   lg:mb-0">
                        <img
                            src="https://i.ibb.co.com/2KsNr1p/oteher-benefits.webp"
                            alt="Navy dock scene"
                            className="  object-cover rounded-lg shadow-lg  w-full object-center h-[500px]"
                        />
                    </div>
                </div>
                <div className='mx-2'>
                    <BottomSection></BottomSection>

                </div>
            </div>
        </div>
    )
}

export default OthrBenefits