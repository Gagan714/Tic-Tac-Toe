import React from 'react'

function Squares({value,onSquareClick}){
  return (
    <button onClick={onSquareClick}>{value}</button>
  )
}

export default Squares