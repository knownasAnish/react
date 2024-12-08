import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <h1 className='text-center m-10 text-3xl font-extrabold '>please Log In</h1>
    return <h1 className='text-center m-10 text-3xl font-extrabold '>Welcome {user.username}</h1>
    
}
export default Profile 