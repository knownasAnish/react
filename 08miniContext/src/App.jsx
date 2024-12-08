import React from 'react'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
        <div className='w-full bg-gray-200 flex flex-col justify-center items-center min-h-screen'>
          <Login />
          <Profile />
        </div>
    </UserContextProvider>
  )
}

export default App
