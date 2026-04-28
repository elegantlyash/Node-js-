import React from 'react'

const Child = ({name,Alert}) => {
  return (
    <>
    <div>Child</div>
    <h1 >Rendered in child comp: {name}</h1>
    <button onClick={Alert}>Click</button>
    </>
  )

}

export default Child