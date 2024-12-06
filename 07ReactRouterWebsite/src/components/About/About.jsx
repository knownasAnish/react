import React from "react";
import { useState, useEffect } from 'react'
import a1 from '../../assets/about1.jpg'
import a2 from '../../assets/about2.jpg'
import a3 from '../../assets/about3.jpg'
import a4 from '../../assets/about4.jpg'

function About(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        {
            id:1,
            style: 'text-black',
            content: (
            <>
            <img src={a3} alt="" className='absolute w-4/6 h-[500px] h-full opacity-10' />
            <h1 className='text-center text-4xl m-4 mt-10 font-bold'>About Us</h1>
            <p className='w-4/6 m-5 text-2xl font-bold text-black'>
                Welcome to <span className='text-orange-500 italic m-1 text-3xl font-extrabold'>Data Doko</span>, where <span className='text-blue-500'>technology</span> meets <span className='text-blue-500'>innovation</span> to drive <span className='text-blue-500'>success</span>. <br /><br />
                At Data Doko, we specialize in providing cutting-edge solutions tailored to meet the unique needs of businesses and individuals. From software development and IT consulting to cloud computing and cybersecurity, our expertise spans across multiple tech domains, empowering our clients to thrive in the digital age.
            </p>
            </>),
        },
        {
            id:2,
            style: 'bg-black text-white',
            content: <p>Our Mission

            Our mission is to deliver innovative, reliable, and scalable technology solutions that enable our clients to achieve their goals efficiently. We are dedicated to making technology accessible, intuitive, and transformative for everyone.</p>,
        },
        {
            id:3,
            style: 'bg-black text-white',
            content: <p>Our Vision

            To be a global leader in the tech industry, setting new standards of excellence in innovation, customer satisfaction, and sustainability.</p>,
        },
        {
            id:4,
            style: 'bg-black text-white',
            content: <p>What We Do

            Software Development: Crafting custom software solutions for businesses of all sizes.
            Web & Mobile Apps: Designing user-friendly and robust applications for web and mobile platforms.
            Cloud Services: Helping businesses transition to the cloud with seamless integration and support.
            Cybersecurity: Ensuring the safety and security of digital assets with top-notch cybersecurity measures.
            AI & Automation: Transforming operations with AI-driven tools and automated workflows.</p>,
        },
        
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollDirections = event.deltaY > 0 ? "down" : "up";

            setCurrentIndex((prev) => {
                if(scrollDirections === "down" && prev < content.length-1){
                    return prev+1;
                }else if(scrollDirections === "up" && prev > 0){
                    return prev-1;
                }
                return prev
            })

        }

        window.addEventListener('wheel', handleScroll);

        return() => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [content.length])
    return(
        <div className='w-full lg:flex lg:justify-center'>
            <div className={`w-4/6 h-[500px] ${content[currentIndex].style} lg:flex lg:flex-col lg:items-center`}>
                {content[currentIndex].content}
            </div>
        </div>
    )
}

export default About