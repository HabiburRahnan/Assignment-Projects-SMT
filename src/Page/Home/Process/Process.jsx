import React from 'react'

function Process() {
    return (
        <div>
            <div
                className="flex flex-col items-center justify-center  object-cover bg-cover   bg-black opacity-100  bg-center p-6"
                style={{
                    backgroundImage: `url("https://i.ibb.co.com/WghhB2s/process-image.webp")`,
                    filter: "grayscale(100)"
                }}
            >


                {/* Title */}
                <h2 className="text-white text-lg uppercase font-semibold mb-8 pt-5">
                    – Process –
                </h2>

                {/* Process Steps */}
                <div className="flex flex-col lg:flex-row items-center justify-center  gap-8 lg:gap-12">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center max-w-xs text-white">
                        <div className="w-16 h-16 flex items-center justify-center bg-white text-black text-2xl font-bold rounded-full mb-4">
                            1
                        </div>
                        <h3 className="text-lg font-semibold mb-2">IT & Cybersecurity</h3>
                        <p className="text-sm">
                            Conduct a thorough analysis of project requirements in response to government Requests for Proposals.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center max-w-xs text-white">
                        <div className="w-16 h-16 flex items-center justify-center bg-white text-black text-2xl font-bold rounded-full mb-4">
                            2
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Processing</h3>
                        <p className="text-sm">
                            Once a contract is awarded, initiate the security clearance processing for personnel involved in the project.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center max-w-xs text-white">
                        <div className="w-16 h-16 flex items-center justify-center bg-white text-black text-2xl font-bold rounded-full mb-4">
                            3
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Project Execution</h3>
                        <p className="text-sm">
                            Begin the execution phase of the project, following the approved proposal and project plan.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Process