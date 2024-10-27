import React, { useEffect, useState } from 'react'
import Title from '../../../Components/Title'
import { Link } from 'react-router-dom'

function Services() {
    const [items, setItems] = useState()
    useEffect(() => {
        fetch("/Service.json")
            .then(data => data.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div id='service' className='flex justify-center items-center my-5'>
                <Title name={"SERVICES"}></Title>
            </div>
            <h1 className='text-2xl font-sans font-semibold text-center '>SPARTAN SOLUTIONS</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-auto md:px-40 gap-5 p-10'>
                {items?.map(item =>
                    <div className="card bg-white  md:w-full mx-auto shadow-2xl">
                        <figure className="pt-5">
                            <img
                                src={item?.image}
                                alt={item?.title}
                                className="rounded-xl object-cover w-24 h-24 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item?.title}</h2>
                            <p className='text-xs'>{item?.description}</p>
                            <div className="card-actions">
                                <Link to="/" className="text-red-600 hover:underline font-semibold">Learn more →</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Services
