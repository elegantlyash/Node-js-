import React, { useEffect, useState } from 'react'

const UseStateOne = () => {

  const [count, setCount] = useState(0)

   console.log(count)
  function increase() {
    console.log("inside function")
    setCount(count + 1)
    //it will update the count value in the count state

    function decrease() {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>UseStateOne</div>
      count : {count}
      <button onClick={increase}>Click</button>
      <button onClick={decrease}>Click</button>
    </>
  )
}

export default UseStateOne