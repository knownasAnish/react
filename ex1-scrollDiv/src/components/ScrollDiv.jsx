import React from 'react'
import { useState, useEffect} from 'react'

function ScrollDiv(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        {
            id:1,
            style:'bg-blue-500',
            content:<h1 className='text-white'>FIRST DIV</h1>,
        },
        {
            id:2,
            style:'bg-red-500',
            content:<h1 className='text-white'>SECOND DIV</h1>,
        },
        {
            id:3,
            style:'bg-green-500',
            content:<h1 className='text-white'>THIRD DIV</h1>,
        },
        {
            id:4,
            style:'bg-yellow-500',
            content:<h1 className='text-white'>FOURTH DIV</h1>,
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
            
            setCurrentIndex((prev) => {
                if(scrollDirection === "down" && prev < content.length-1){
                    return prev+1;
                }else if(scrollDirection === "up" && prev > 0){
                    return prev-1;
                }
                return prev;
            })
        }

        window.addEventListener('wheel', handleScroll)

        return() => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [content.length])
    return(
        <div className='w-full bg-black h-screen'>
            <div className={`${content[currentIndex].style} w-4/5 h-96`}>
                {content[currentIndex].content}
            </div>
        </div>
    )
}

export default ScrollDiv