import React from 'react'
import Child from './Child'


const Parent = () => {
    const fullname="Mike Wheeler"
    function Alert(){
        alert("Vecna Around")
    }


  return (
    <>
    <div>Parent</div>
    <h1>Render in Parent comp:{fullname}</h1>
    <Child name={fullname} Alert={Alert}/>
    </>
  )
}

export default Parent