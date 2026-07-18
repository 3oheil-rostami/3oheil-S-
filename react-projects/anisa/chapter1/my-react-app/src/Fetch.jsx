import React, { useEffect, useState } from 'react'

export default function Fetch() {
    const [users , setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    console.log(users)
  return (
    <div>
      {
        users.map((user) => {
            return(
            <li key={user.id}>
                {user.name}
            </li>
        )})
      }
    </div>
  )
}
