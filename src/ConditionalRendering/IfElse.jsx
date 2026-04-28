import React from 'react'

const IfElse = () => {
    let msg;
    const age=20;
    if(age>18){
        msg="vote";
    }
    else{
        msg="Can't Vote"
    }
  return (
    <>
    <div>IfElse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default IfElse