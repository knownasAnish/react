import React from 'react'

function DefProps(props){
    return(
        <div className="mx-10 my-5 bg-blue-500 h-1/3 w-1/4">
            <h1>Name: {props.first}</h1>
            <h2>Age: {props.second}</h2>
        </div>
    )
}
DefProps.defaultProps ={
    first: "Jane Doe",
    second: "0"
}

export default DefProps