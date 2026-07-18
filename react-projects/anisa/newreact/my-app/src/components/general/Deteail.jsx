import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'
import { ThemeContext } from '../../App'

export default function Detail() {
  const [articel , setArtcel] = useState({})
  const theme = useContext(ThemeContext)
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    request(`/posts/${id}`)
    .then((res) => setArtcel(res.data))
  },[])
  console.log(articel)

  return (
    <div className='box content'style={theme}>
      <h2>Article Deteail</h2>
      <h3>{articel.id}</h3>
      <h3>{articel.title}</h3>
      <Link to='/articels'> Back to List</Link>
    </div>
  )
}
