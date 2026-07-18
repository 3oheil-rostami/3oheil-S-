// import React, { useEffect, useState } from 'react'
// // import Advance from './Advance.css'
// import './Advance.css'
// export default function AdvanceState() {
//     const [count , setCount] = useState(0)
//     const [num , setNum] = useState(0)


//     const clickHandler = () => {
//       setTimeout(() => {
//         setCount(count + 1)
//       },1000)
//     }
//     useEffect(() => {
//       setInterval(() => {
//         setNum (p => p +1)
//       },1000)
//     },[])
//     // useEffect(() => {
//     //     setInterval(() => {
//     //         setCount (prev => prev+1)
//     //     }, 1000);
//     // } , [])

//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         setNum(p => p+ 1)
//     //     }, 1000);
//     // }, [count])
//   return (
//     <div className='container'>
//       <h1>{count}</h1>
//       <p className='first'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?</p>
//       <p className='second'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?</p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?
//       <p className='first'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?</p>
//       <p id='third'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?</p>
//       <p className='first'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, inventore?</p>
//       <p class="quote">زندگی زیباست</p>
//       <button className='button' onClick={clickHandler}>+</button>
//       <hr />
//       <h1>{num}</h1>
//       <div className="bironi">
//         <div className="daroni"></div>
//       </div>
//     </div>
//   )
// }
