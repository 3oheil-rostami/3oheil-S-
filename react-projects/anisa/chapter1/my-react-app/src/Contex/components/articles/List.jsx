import React, { useState, useEffect } from 'react'
import request from '../../tools/request'
import { Link } from 'react-router-dom'

export default function List() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    request('/posts?_limit=5').then(({ data }) => {
      setLoading(false)
      setArticles(data)
    })
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📰 Latest Articles</h2>

      {loading ? <p style={styles.loading}>Loading...</p> : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => (
              <tr key={article.id} style={styles.tr}>
                <td style={styles.td}>{article.id}</td>
                <td style={styles.td}>
                    
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    // border : '1px solid rgba(255,255,255,0.5)',
 
    
    margin: '40px auto',
    padding: '20px',
    borderRadius: '16px',
    backgroundColor: 'inherit', // inherit parent background (light/dark)
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
    color: 'inherit' // also inherit text color
  },
  loading: {
    fontSize: '18px',
    textAlign: 'center',
    color: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    backgroundColor: 'transparent' // make table itself transparent
  },
  th: {
    backgroundColor: 'transparent',
    color: 'inherit',
    padding: '16px',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '16px',
    borderBottom: '2px solid currentColor'
  },
  tr: {
    transition: 'background 0.3s',
  },
  td: {
    padding: '14px 16px',
    borderBottom: '1px solid currentColor',
    fontSize: '15px',
    color: 'inherit',
    backgroundColor: 'transparent'
  }
}
