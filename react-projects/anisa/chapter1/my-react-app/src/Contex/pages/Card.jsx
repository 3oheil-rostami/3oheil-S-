import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function Card() {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios(`https://dummyjson.com/posts/${id}`)
            .then(({ data }) => setPost(data))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <h1>loading ....</h1>
    }

    return (
        <div>
            <h1>Card: {id}</h1>

            <div>
                <h2>Reactions</h2>
                <p><AiFillLike />: {post.reactions?.likes}</p>
                <p><AiFillDislike />: {post.reactions?.dislikes}</p>
            </div>

            <hr />

            <div>
                <h2>Tags</h2>
                <h4>1: {post.tags?.[0]}</h4>
                <h4>2: {post.tags?.[1]}</h4>
            </div>
        </div>
    )
}
