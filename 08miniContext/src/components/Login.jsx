import React, { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Login(){
    const [username, setUsername] = useState('Anish')
    const [password, setPassword] = useState('1234')

    const {setUser} = useContext(UserContext)
    const loginClick = (e) => {
        e.preventDefault()
        setUser({username, password})
        
    }
    return(
        <div className='w-fit p-20 mx-auto bg-green-200 flex flex-col'>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className='h-[50px] m-5 w-[400px] text-xl font-bold' placeholder="username"/>
            <input type="text" onChange={(e) => setPassword(e.target.value)} className='h-[50px] m-5 w-[400px] text-xl font-bold' placeholder="password"/>
            <button onClick={loginClick} className='bg-blue-400 rounded-xl w-[200px] mx-auto h-[40px] text-2xl font-bold text-white'>Login</button>
        </div>
    )
}

export default Login