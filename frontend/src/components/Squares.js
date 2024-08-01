import React from 'react'

function Squares({value,onSquareClick}){
  return (
    <button className='h-36 w-36 bg-slate-700 border-2 text-8xl text-black' onClick={onSquareClick}>{value}</button>
  )
}

export default Squares