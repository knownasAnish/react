import React, { useState } from "react"

function App() {
    const [color, setColor] = useState('olive')
    return(
        <div className="w-full h-screen" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="bg-white flex flex-wrap gap-10 justify-center">
                    <button onClick={() => setColor('red')} className="rounded-full px-5 py-3 m-1 text-white font-bold" style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={() => setColor('blue')} className="rounded-full px-5 py-3 m-1 text-white font-bold" style={{backgroundColor: "blue"}}>blue</button>
                    <button onClick={() => setColor('green')} className="rounded-full px-5 py-3 m-1 text-white font-bold" style={{backgroundColor: "green"}}>green</button>
                    <button onClick={() => setColor('yellow')} className="rounded-full px-5 py-3 m-1 text-black font-bold" style={{backgroundColor: "yellow"}}>yellow</button>
                    <button onClick={() => setColor('purple')} className="rounded-full px-5 py-3 m-1 text-white font-bold" style={{backgroundColor: "purple"}}>purple</button>
                    <button onClick={() => setColor('pink')} className="rounded-full px-5 py-3 m-1 text-black font-bold" style={{backgroundColor: "pink"}}>pink</button>
                    <button onClick={() => setColor('orange')} className="rounded-full px-5 py-3 m-1 text-black font-bold" style={{backgroundColor: "orange"}}>orange</button>
                    <button onClick={() => setColor('black')} className="rounded-full px-5 py-3 m-1 text-white font-bold" style={{backgroundColor: "black"}}>black</button>
                </div>
            </div>
        </div>
    )
  
}

export default App
