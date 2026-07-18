import React, { useContext, useEffect, useState } from 'react'
import request from '../../tools/request'
import { ThemeContext } from '../../App'
import { Link } from 'react-router-dom'

export default function Articles() {

    const [posts, setPosts] = useState([])
    const theme = useContext(ThemeContext)
    
    useEffect(() => {
        request('/posts?_limit=10')


            .then(res => setPosts(res.data))
    }, [])
    console.log(posts)
    return (
        <div className='box content' style={theme}>
            <h2>Articles</h2>
            <ol>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link to={`/articels/${post.id}`}><p>Title : {post.id}</p></Link>
                    </div>
                ))}
            </ol>
        </div>
    )
}
