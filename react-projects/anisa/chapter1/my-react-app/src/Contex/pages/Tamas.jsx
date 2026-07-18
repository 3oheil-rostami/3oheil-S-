import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Tamas() {

  const [num , setNum] = useState(60)

const timer = useEffect(() => {
  setInterval(() => {
      setNum(prev => prev - 1)
  }, 1000);

  },[])
if(num==56) {
    return <h1>no response , time out</h1>
  }
  if(num == 55) {
    
    return  <Navigate to={'/'}/>
  }
  
  return (
    <div style={{textAlign:'center'}}>
      <h2>
        {num}
      </h2>
      <Link style={{display:'flex', alignContent:'center', justifyContent:'center'}} to={'/'}>Back To Home</Link>
      {/* <link rel="stylesheet" href="/" /> */}
      
    </div>
  )
}
