import './App.css';
import Squares from './components/Squares';
import { useState } from 'react';

function App() {
  const [squares,SetSquares]=useState(Array(9).fill(null))
  const [xIsNext,setXIsNext]=useState(true);
  function handleClick(i){
    if(squares[i]){
      return;
    }
    const nextSquare=squares.slice()
    if(xIsNext){
      nextSquare[i]='X';
    }else{
      nextSquare[i]='O';
    }
    SetSquares(nextSquare);
    setXIsNext(!xIsNext);
  }
  return (
   <>
   <div className=' h-screen w-auto flex flex-col justify-center items-center bg-black'>
   <div className='flex justify-center items-center'>
    <Squares value={squares[0]} onSquareClick={()=>handleClick(0)}/>
    <Squares value={squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Squares value={squares[2]} onSquareClick={()=>handleClick(2)}/>
   </div>
   <div className='flex justify-center items-center'>
    <Squares value={squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Squares value={squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Squares value={squares[5]} onSquareClick={()=>handleClick(5)}/>
   </div>
   <div className='flex justify-center items-center'>
    <Squares value={squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Squares value={squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Squares value={squares[8]} onSquareClick={()=>handleClick(8)}/>
   </div>
   </div>
   </>
  );
}

export default App;
