import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => setUsers(data))
    }, [])

    return (
        <div>
            {users.map((user) => (
                <li>{user.name}</li>
            ))}
        </div>
    )
}
