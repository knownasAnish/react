import React, { useState } from 'react'
import logo from '../assets/logo.png';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";


// function Card(props){
//     return (
//         <>
//             <div className="mx-10 my-5 bg-green-500 w-1/4 h-1/2 rounded-xl">
//                 <div>
//                     Card
//                 </div>
//                 <div>
//                     {props.username}
//                 </div>

//             </div>
//         </>
//     )
// }
function Card({logo, title, description}){
    const [isColorChange, setIsColorChange] = useState(false)
    function changeColor(){
        setIsColorChange(true)
    }
    return (
        <>
            <div className= {`w-5/12 h-52 rounded-xl border-1 flex flex-col items-center justify-around ${isColorChange ? 'bg-red-400' : 'bg-white'}`}>
                <div className="w-full h-3/5 bg-white flex items-center justify-around rounded-xl">
                    <img className="h-3/5 w-1/4 ml-5 " src={logo} alt="" />
                    <div className="w-3/4 flex flex-col text-center">
                        <p className="font-bold text-2xl mb-1">{title}</p>  
                        <p className="font-medium">{description}</p>  
                    </div> 
                </div> 
                <button onClick={changeColor} className='w-full h-1/5 bg-blue-400 text-center text-white rounded-xl text-lg font-medium hover:bg-gray-100 hover:pointer hover:text-black'>View Now</button>
            </div>
        </>
    )
}

export default Card