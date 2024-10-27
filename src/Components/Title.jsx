import React from 'react'

function Title({ name }) {
    return (
        <div className='flex justify-center lg:justify-start items-center '>— <h1 className='text-sm font-semibold text-red-600'> {name} </h1> —</div>
    )
}

export default Title