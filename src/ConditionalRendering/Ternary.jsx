import React from 'react'

const Ternary = () => {
    const isLoggedin = false;

  return (
    <>
    <div>Ternary</div>
    {isLoggedin?"Dashboard Access Given":"Access Denied"}
    </>
  )
}

export default Ternary