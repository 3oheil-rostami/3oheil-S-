import React, { useState, useEffect } from 'react'
import request from '../../tools/request'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [article, setArticle] = useState([])
  const [num, setNum] = useState(0)
  const { id } = useParams()


  const increaseHandler = () => {
    setNum(num + 1)
    
  }
  const decreaseHandler = () => {
    setNum(num - 1)
  }
  useEffect(() => {
    // فرض: ما فقط پست شماره 5 رو می‌خوایم
    request(`/posts/${id}`)
      .then(({ data }) => {
        setArticle(data)
      })
      .catch(err => console.error('خطا در دریافت مقاله:', err))
  }, [num])

  console.log(article)

  if (!article) return <p>در حال دریافت مقاله...</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', color: '#888' }}>📰 Title: {article.id}</h2>
      <p>{article.body}</p>
      <div style={{ textAlign: 'center', margin: '10px', padding: '10px' }}>
        <button onClick={increaseHandler} >next article</button>
        <button onClick={decreaseHandler} style={{ padding1: '10px', margin: '10px' }}>back article</button>
        <h3>{num}</h3>
      </div>
    </div>
  )
}
