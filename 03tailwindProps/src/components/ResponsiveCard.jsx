import React from "react";
import Logo from '../assets/logo.png'

function ResponsiveCard(){
    return(
        <>
            <div className="mt-5 bg-white max-w-full mx-5 rounded-xl mb-5">
                <div className="max-w-[300px] mx-2 my-2">
                    <img className="object-cover" src={Logo} alt="" />
                </div>
                <div className="max-w-full bg-slate-200 mt-2">
                    <p className="text-blue-600 font-bold text-md m-2 mt-4 sm:text-lg sm:text-yellow-600 md:text-green-600 lg:text-red-600 xl:text-blue-600 2xl:text-black">Data Doko</p>
                    <p className="text-black font-semibold m-2 text-sm sm:text-md">A complete IT solutions. A modern Tech Development Company.</p>
                    <p className="text-slate-600 font-semibold m-2 text-sm sm:text-md">Anish Kumar Das</p>
                </div>
            </div>
        </>
    )
}

export default ResponsiveCard