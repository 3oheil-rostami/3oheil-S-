import React, { useContext, useEffect, useState } from 'react'
import { ThemContex } from '../src/Contex/App'
import UserConytext from '../src/Contex/context/UserContext'
import { Navigate } from 'react-router-dom'
import UseProps from './UseProps'
import ScoreUser from '../src/Contex/context/ScoreUser'

export default function Profile() {

  const them = useContext(ThemContex)
  const score = useContext(ScoreUser)

  console.log(score)
  console.log(score[0].name)

  const [message, setMessage] = useState('... در انتظار !')
  const [state, setState] = useState(false)

  
  useEffect(() => {
    const timeId = setTimeout(() => {
      setMessage('پرداخت با موفقیت انجام شد .')
    }, 3000);
    return () => {
      clearTimeout(timeId)
    }
  }, [state])
  const clickHandler = () => {
    setState(!state)

  }
  const { user, isLogin } = useContext(UserConytext)
  return (
    <div>
      {isLogin ? <div style={them}>
        <h2>Profile</h2>
        <p>Name : {user.name}</p>
        <hr />
        <button disabled={state} onClick={clickHandler}>shop</button>
        {state && <h2>{message}</h2>}
        {/* <UseProps {...newName[0]} /> */}
        {/* {
          newName.map((items, index) => (
            <UseProps key={index

            } {...items} />
          ))
        } */}

        <div>
          {score.map((scor) => (
            <ul key={scor.id}>
              <div style={{display:'flex', gap:'10px'}}>
                <p>name : {scor.name}</p>
                <p> score : {scor.score}</p>
              </div>
            </ul>
          ))}
        </div>
      </div> : <Navigate to={'/login'} />}
    </div>
  )
}
