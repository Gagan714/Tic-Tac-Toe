import './App.css';
import Squares from './components/Squares';
import { useState } from 'react';

function App() {
  function Winner(S){
    const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<lines.length;i++){
        const[a,b,c]=lines[i];
        if(S[a]===S[b] && S[a]===S[c] && S[b]===S[c]){
            return S[a];
        }
    }
    return null;
}
  const [squares,SetSquares]=useState(Array(9).fill(null))
  const [xIsNext,setXIsNext]=useState(true);
  let status;
  const winner=Winner(squares)
  if(winner){
    status='Winner is : '+winner;
  }else{
    status='Next Player : '+ (xIsNext?'X':'O')
  }
  function clearAll(){
    const l=Array(9).fill(null);
    SetSquares(l);
  }
  function handleClick(i){
    if(squares[i] || Winner(squares)){
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
   <div className='h-screen w-auto flex flex-col justify-center items-center bg-black'>
   <div className='text-white text-4xl'>{status}</div>
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
   <button onClick={clearAll} className='text-black bg-white mt-3 text-4xl w-36 rounded-3xl'>Reset</button>
   </div>
   </>
  );
}

export default App;
