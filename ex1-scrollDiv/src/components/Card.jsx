import React from 'react'

function Card(props){
    return(
        <>
            <div className='h-screen w-full bg-gray-200 flex'>
                <div className='h-screen w-1/2 bg-red-200'>

                </div>
                <div className='h-screen w-1/2 bg-blue-400 flex flex-col'> 
                    <div className='w-full h-1/2 bg-green-200'>

                    </div>
                    <div className='w-full h-1/2 bg-yellow-200'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card