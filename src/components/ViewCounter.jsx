import React from 'react'

const ViewCounter = ({count,increaseHandler }) => {
    console.log("Counter component is running now");
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='flex items-center justify-center flex-col gap-4 border p-8'>
                <p className='text-2xl'>{count}</p>
                <button 
                    className=' rounded-md px-4 py-0.5 border cursor-pointer text-white bg-sky-600 hover:bg-sky-800 transition-all duration-300'
                    onClick={increaseHandler}
                    type="button">increase counter </button>
            </div>
        </div>
    )
}

export default ViewCounter