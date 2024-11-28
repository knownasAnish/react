import { useState } from 'react'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(10)
  const addVal = () => {
    if(counter==20){
      alert("You cannot exceed 20")
    }else{
      setCounter(counter+1)
    }
    
    console.log(counter)
  }
  const removeVal = () => {
    if(counter==0){
      alert("You cannot go negative")
    }else{
      setCounter(counter-1)
    }
    
    console.log(counter)

  }
  return(
  <>
    <h1>Chai aur react {counter}</h1>
    <h2>count = {counter}</h2>

    <button onClick={addVal}>addVal {counter}</button>
    <button onClick={removeVal}>removeVal {counter}</button>
  </>
  )
}

export default App
